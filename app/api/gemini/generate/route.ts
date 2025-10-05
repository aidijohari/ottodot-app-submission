import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { supabase } from '../../../../lib/supabaseClient'

export async function POST(req: NextRequest) {
    const { prompt, session } = await req.json()

    const apiKey = process.env.GOOGLE_API_KEY
    if (!apiKey) {
        return NextResponse.json({ error: 'API key not set' }, { status: 500 })
    }

    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({
        model: 'gemini-2.5-flash',
        generationConfig: { responseMimeType: "application/json" }
    })

    try {
        const result = await model.generateContent(prompt)
        const output = result.response.text()
        const data = JSON.parse(output);

        const { data: insertedRow, error } = await supabase.from('math_problem_sessions')
            .insert({
                problem_text: data.problem_text,
                correct_answer: data.final_answer,
            })
            .select()
            .single();

        if (error) {
            console.error('Supabase insert error:', error)
            return NextResponse.json({ error: error.message }, { status: 500 })
        }

        return NextResponse.json({
            id: insertedRow.id,
            problem_text: data.problem_text
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message || 'Failed to generate content' }, { status: 500 })
    }
}