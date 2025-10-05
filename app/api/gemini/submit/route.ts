import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { supabase } from '../../../../lib/supabaseClient'

export async function POST(req: NextRequest) {
    const { sessionId, userAnswer, problem_text } = await req.json()

    const apiKey = process.env.GOOGLE_API_KEY
    if (!apiKey) {
        return NextResponse.json({ error: 'API key not set' }, { status: 500 })
    }

    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({
        model: 'gemini-2.5-flash',
        generationConfig: { responseMimeType: "application/json" }
    })

    const prompt = `You are a helpful assistant that checks the correctness of a student's answer to a math problem. 
    The math problem was generated for Primary 5 students in Singapore and may involve basic arithmetic, fractions, percentages, or simple geometry.

    The student has provided their answer to the problem. Your task is to determine if the student's answer is correct or incorrect.

    You should respond with a JSON object containing the following keys:
    1) is_correct: [true if the student's answer is correct, false otherwise]
    2) correct_answer: [The correct numerical answer to the problem]
    3) feedback: [A brief explanation of why the answer is correct or incorrect]

    Here is the information you need:
    - Math Problem: ${problem_text}
    - Student's Answer: ${userAnswer}

    Please ensure your response is strictly in JSON format as specified above, without any additional text or explanations.

    Example response:
    {
      "is_correct": true,
      "correct_answer": 42,
      "feedback": "Great job! Your answer is correct <insert helpful details here>"
    }`

    try {
        console.log(prompt)
        const result = await model.generateContent(prompt)
        const output = result.response.text()
        const data = JSON.parse(output);

        // Fetch the correct answer from DB
        console.log('Session ID:', sessionId);
        const { error } = await supabase
            .from('math_problem_sessions')
            .select('correct_answer')
            .eq('id', sessionId)
            .single()
        if (error || !data) {
            return NextResponse.json({ error: 'Problem not found' }, { status: 404 })
        }
        console.log('User Answer submit:', userAnswer);
        const isCorrect = Number(userAnswer) === Number(data.correct_answer)
        console.log('Is Correct:', isCorrect);

        // Insert submission into math_problem_submissions
        const { error: insertError } = await supabase
            .from('math_problem_submissions')
            .insert({
                session_id: sessionId,
                user_answer: userAnswer,
                is_correct: isCorrect,
                feedback_text: data.feedback,
            })

        if (insertError) {
            return NextResponse.json({ error: insertError.message }, { status: 500 })
        }

        return NextResponse.json({
            isCorrect,
            correct_answer: data.correct_answer,
            feedback: data.feedback,
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message || 'Failed to generate content' }, { status: 500 })
    }
}