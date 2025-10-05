'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

interface MathProblem {
  problem_text: string
  final_answer: number | null
}

export default function Home() {
  const [problem, setProblem] = useState<MathProblem | null>(null)
  const [userAnswer, setUserAnswer] = useState('')
  const [feedback, setFeedback] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [hasDollar, setHasDollar] = useState(false)
  const controls = useAnimation();
  const geminiPrompt =
    `Generate a math question for Primary 5 students in Singapore (always use metric system).
    Immediately after the question, provide the correct numerical answer.
    Format your output strictly as follows as a JSON object with two keys:

    1) problem_text: "[The generated math question goes here]"
    2) final_answer: [The correct numerical answer goes here]

    Example (for an easy arithmetic question):
    {
      probkem_text: "What is 5 plus 3?"
      final_answer: 8
    }

    Return only valid JSON, no markdown formatting, no explanations.
    `

  const generateProblem = async () => {
    // TODO: Implement problem generation logic
    // This should call your API route to generate a new problem
    // and save it to the database
    setUserAnswer('')
    setFeedback(null)
    setIsCorrect(null)
    setIsLoading(true)

    // Detect if the problem text contains any currency symbols for dollar sign in submit input
    const currencyRegex = /[$€£¥₹₩₽₺₪₫₴₦₱₲₵₡₢₣₤₥₧₨₩₭₮₯₰₱₲₳₴₵₸₺₼₽₾₿]/; // added all symbols for completeness  
    const res = await fetch('/api/gemini/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: geminiPrompt }),
    })
    if (!res.ok) {
      setFeedback('An error occurred: ' + res.statusText)
      setIsLoading(false)
      return
    }

    const data = await res.json()
    if (data.error) {
      setFeedback('An error occurred: ' + data.error)
      setIsLoading(false)
      return
    }

    setProblem({
      problem_text: data.problem_text,
      final_answer: null
    })
    setSessionId(data.id)
    setHasDollar(currencyRegex.test(data.problem_text))
    setIsLoading(false)
  }

  const submitAnswer = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement answer submission logic
    // This should call your API route to check the answer,
    // save the submission, and generate feedback
    if (!problem || !sessionId) return

    setIsLoading(true)
    setFeedback('')
    setIsCorrect(null)

    try {
      const res = await fetch('/api/gemini/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          userAnswer: Number(userAnswer),
          problem_text: problem.problem_text,
        }),
      })
      if (!res.ok) {
        setFeedback('An error occurred: ' + res.statusText)
        setIsLoading(false)
        return
      }

      const data = await res.json()
      if (data.error) {
        setFeedback('An error occurred: ' + data.error)
        setIsLoading(false)
        return
      }
      setIsCorrect(data.isCorrect)
      setFeedback(data.feedback)

    } catch (error) {
      setFeedback('An error occurred. Please try again.')
      setIsCorrect(false)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (isLoading) {
      controls.start({
        scale: [1, 1.05, 1],
        background: [
          "linear-gradient(135deg, #6EE7B7, #3B82F6)",
          "linear-gradient(135deg, #3B82F6, #9333EA)",
          "linear-gradient(135deg, #9333EA, #EC4899)",
          "linear-gradient(135deg, #EC4899, #6EE7B7)",
        ],
        transition: {
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        },
      });
    } else {
      // Reset to default when not loading
      controls.start({
        scale: 1,
        background: "linear-gradient(135deg, #3B82F6, #2563EB)",
        transition: { duration: 0.5 },
      });
    }
  }, [isLoading, controls]);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Math Problem Generator
        </h1>
        <div className="bg-white rounded-lg shadow-lg mb-6">
          <motion.button
            animate={controls}
            onClick={generateProblem}
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
            whileTap={{ scale: isLoading ? 1 : 0.97 }}
          >
            {isLoading ? 'Generating...' : 'Generate New Problem'}
          </motion.button>
        </div>

        {problem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Problem:</h2>
            <div className="text-lg text-gray-800 leading-relaxed mb-6">
              {problem.problem_text}
            </div>

            <form onSubmit={submitAnswer} className="space-y-4">
              <div>
                <label htmlFor="answer" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Answer:
                </label>
                <div className="flex border items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                  {hasDollar && (<div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">$</div>)}
                  <input
                    type="number"
                    id="answer"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    className="no-spinner block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    placeholder="Enter your answer"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={!userAnswer || isLoading}
                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold py-3 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
              >
                Submit Answer
              </button>
            </form>
          </motion.div>
        )}

        {feedback && (
          <div aria-live="polite" className={`rounded-lg shadow-lg p-6 ${isCorrect ? 'bg-green-50 border-2 border-green-200' : 'bg-yellow-50 border-2 border-yellow-200'}`}>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              {isCorrect ? '✅ Correct!' : '❌ Not quite right'}
            </h2>
            <p className="text-gray-800 leading-relaxed">{feedback}</p>
          </div>
        )}
      </main>
    </div>
  )
}