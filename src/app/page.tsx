'use client'

import Link from 'next/link'
import { useState } from 'react'
import SubscriptionModal from './components/SubscriptionModal'

const blogPosts = [
  {
    id: 4,
    title: "App Startup API: Speed Up Your Launch in 5 Minutes",
    excerpt: "Speed matters on Android. The Jetpack App Startup API helps you clean up messy initialization code,...",
    category: "Android Development",
    readTime: "2 min read",
    date: "2025-09-10",
    slug: "app-startup-api"
  },
  {
    id: 3,
    title: "SharedPreferences vs DataStore: Which One Should You Use?",
    excerpt: "Why DataStore is the modern, async, and safer choice for Android apps...",
    category: "Android Development",
    readTime: "4 min read",
    date: "2025-09-06",
    slug: "shared-preferences-datastore"
  },
  {
    id: 1,
    title: "React Native vs Native: The Interactive Decision Guide",
    excerpt: "Stop debating and start deciding. Use this interactive tool to map your project needs to the right tech stack.",
    category: "Architecture Decision",
    readTime: "8 min read",
    date: "2025-08-30",
    slug: "react-native-vs-native-guide"
  },
  {
    id: 2,
    title: "5 React Native Performance Tips That Actually Work",
    excerpt: "Stop your app from lagging with these proven optimization techniques",
    category: "React Native",
    readTime: "3 min read",
    date: "2025-08-17",
    slug: "react-native-performance"
  }
]

export default function Home() {
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Mobile With Me</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mobile Development Made Simple
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Bite-sized tips and tricks for mobile app developers.
            Learn one concept at a time, build better apps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Reading
            </button>
            <button
              onClick={() => setIsSubscriptionModalOpen(true)}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Latest Posts</h3>
          <p className="text-gray-600">Quick, practical tips to level up your mobile development skills</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={post.slug ? `/posts/${post.slug}` : '#'}
              className="block"
            >
              <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <span className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            View All Posts
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
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

      <SubscriptionModal
        isOpen={isSubscriptionModalOpen}
        onClose={() => setIsSubscriptionModalOpen(false)}
      />
    </div>
  )
}
