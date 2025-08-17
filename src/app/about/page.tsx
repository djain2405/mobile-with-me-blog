import Link from 'next/link'

export default function About() {
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
              <Link href="/about" className="text-blue-600 font-medium">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              👋 Hello World, Again
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Main Story */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8 border-l-4 border-blue-500">
              <p className="text-lg text-gray-800 leading-relaxed">
                4 years ago, I started <strong>Android with Divya Jain</strong>. It was my little space to share fixes, code snippets, and lessons from my Android journey.
              </p>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              A lot has happened since then.
            </p>

            {/* Journey Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="font-semibold text-gray-900 mb-2">From "Just Android"</h3>
                <p className="text-gray-600 text-sm">To exploring all things mobile (iOS, Android, cross-platform)</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="text-3xl mb-3">👥</div>
                <h3 className="font-semibold text-gray-900 mb-2">From Developer</h3>
                <p className="text-gray-600 text-sm">To engineering manager + conference speaker</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="text-3xl mb-3">✍️</div>
                <h3 className="font-semibold text-gray-900 mb-2">From Long Posts</h3>
                <p className="text-gray-600 text-sm">To wanting something snappier, visual, and instantly useful</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-8 border-l-4 border-purple-500">
              <p className="text-lg text-gray-800 leading-relaxed">
                So today, I'm rebooting. Welcome to <strong>Mobile With Me</strong> 🚀
              </p>
            </div>

            {/* Why Bite-Sized Section */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">✨ Why Bite-Sized?</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Mobile development moves fast. Most of us don't have the luxury of sitting through long tutorials or multi-part deep dives.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              That's why this blog is built around <strong>bite-sized, practical insights</strong>. Each post will focus on solving one specific problem, sharing one trick, or breaking down one concept — something you can read in minutes and apply immediately.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              It's about building your skills incrementally, while keeping things <strong>simple, clear, and visual</strong>.
            </p>

            {/* What to Expect Section */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">🔮 What to Expect Here</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 text-sm">✅</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Quick wins in mobile dev</h4>
                  <p className="text-gray-600 text-sm">Android, iOS, cross-platform solutions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 text-sm">✅</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Visual-first guides</h4>
                  <p className="text-gray-600 text-sm">Diagrams, code snippets, comparisons</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 text-sm">✅</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Lessons learned</h4>
                  <p className="text-gray-600 text-sm">As a dev and as a leader</p>
                </div>
              </div>
            </div>

            {/* Commitment Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8 border border-blue-200">
              <p className="text-lg text-gray-800 leading-relaxed">
                This is my commitment to <strong>showing up consistently</strong>, sharing what I know, and <strong>learning in public</strong>. If you're building for mobile, I'd love for you to join me on this journey.
              </p>
            </div>

            <div className="text-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6 mb-8">
              <p className="text-lg text-gray-800 font-medium">
                The first bite-sized post drops right after this one 👀
              </p>
            </div>

            <div className="text-right text-gray-600 italic">
              — Divya
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Ready to Get Started?</h2>
            <div className="text-center space-y-4">
              <Link 
                href="/" 
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mr-4"
              >
                Explore Latest Posts
              </Link>
              <Link 
                href="/contact" 
                className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
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
