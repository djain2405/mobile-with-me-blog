'use client'

import { useState } from 'react'
import { Mail } from 'lucide-react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        setMessage('🎉 Successfully subscribed! Check your inbox.')
        setEmail('')
      } else {
        setIsSuccess(false)
        setMessage(data.error || 'Something went wrong')
      }
    } catch {
      setIsSuccess(false)
      setMessage('Network error. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-xl">
      <div className="text-center mb-6">
        <Mail className="w-12 h-12 mx-auto mb-3 text-blue-100" />
        <h3 className="text-2xl font-bold mb-2">
          Stay in the Loop
        </h3>
        <p className="text-blue-100">
          Get weekly mobile development tips delivered straight to your inbox
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
        
        {message && (
          <div className={`mt-3 text-sm ${isSuccess ? 'text-green-100' : 'text-red-100'}`}>
            {message}
          </div>
        )}
      </form>

      <p className="text-xs text-blue-200 text-center mt-4">
        No spam, ever. Unsubscribe anytime.
      </p>
    </div>
  )
}