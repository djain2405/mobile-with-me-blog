'use client'
import Link from 'next/link'

export default function SharedPreferencesDataStorePost() {
  const handleLinkedInShare = () => {
    const postUrl = window.location.href
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=SharedPreferences%20vs%20DataStore%3A%20Which%20Should%20You%20Use%3F%20${encodeURIComponent(postUrl)}`
    window.open(linkedInUrl, '_blank', 'width=600,height=400')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <Link href="/" className="text-2xl font-bold text-gray-900">Mobile With Me</Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Blog Post Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
          {/* Post Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                Android
              </span>
              <span className="text-sm text-gray-500">3 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SharedPreferences vs DataStore: Which Should You Use?
            </h1>
            <div className="flex items-center mt-6 text-sm text-gray-500">
              <span>Sept 6, 2024</span>
              <span className="mx-2">•</span>
              <span>By Divya</span>
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              If you’ve been building Android apps for a while, you probably started with SharedPreferences for storing small amounts of key-value data—things like user settings, tokens, or flags. It’s been around forever, but like many legacy APIs, it comes with baggage.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why SharedPreferences feels outdated</h2>
            {/* <p className="text-gray-700 mb-4">
            Why SharedPreferences feels outdated
            </p> */}
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>It’s synchronous → can block the main thread, leading to ANRs if misused.</li>
              <li>Data corruption risk when multiple writes happen at once.</li>
              <li>Lacks modern, type-safe APIs.</li>
            </ul>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why DataStore is the modern pick</h2>
            <p className="text-gray-700 mb-4">
              Google introduced DataStore as a replacement, built on top of Kotlin coroutines and Flow.
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Asynchronous & safe → no more blocking the UI thread.</li>
              <li>Two options: Preferences DataStore (simple key-value, like SharedPreferences) or Proto DataStore (type-safe schema with protobuf).</li>
              <li>Resilient against data corruption.</li>
              <li>Designed with scalability and modern app architecture in mind.</li>
            </ul>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">TL;DR</h2>
            {/* <p className="text-gray-700 mb-4">
            Google introduced DataStore as a replacement, built on top of Kotlin coroutines and Flow.
            </p> */}
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>If you’re starting a new app → go with DataStore.</li>
              <li>If you’re maintaining an older app with lots of SharedPreferences → you don’t need to panic migrate, but consider moving gradually.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Think of it this way:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <ul>🔑 SharedPreferences = flip phone.</ul>
              <ul>🚀 DataStore = smartphone.</ul>
            </ul>

            <p className="text-gray-700 mb-4">
              Both still “work,” but only one really makes sense in 2025.
            </p>
          </div>

          {/* Post Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">Share this post:</span>
                <button onClick={handleLinkedInShare} className="text-blue-600 hover:text-blue-700 transition-colors">LinkedIn</button>
              </div>
              <Link
                href="/"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                ← Back to all posts
              </Link>
            </div>
          </footer>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-semibold">Mobile With Me</span>
          </div>
          <p className="text-gray-400 mb-6">
            Bite-sized mobile development tips, delivered fresh every week.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
