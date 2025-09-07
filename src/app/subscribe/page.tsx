import Link from 'next/link'
import NewsletterSignup from '../components/NewsletterSignup'

export default function Subscribe() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Mobile With Me</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Join the Mobile Development Community
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get practical mobile development tips, tutorials, and insights delivered to your inbox. 
            No fluff, just actionable content to help you build better apps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">What you'll get:</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                Weekly bite-sized tips you can apply immediately
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                Deep dives into React Native, iOS, and Android development
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                Performance optimization techniques that actually work
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                Career advice for mobile developers
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                Early access to new posts and tutorials
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">What you won't get:</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-red-500 mr-3">✗</span>
                Spam or promotional emails
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">✗</span>
                Your email shared with third parties
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">✗</span>
                Daily bombardment of emails
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">✗</span>
                Generic content you can find anywhere
              </li>
            </ul>
          </div>
        </div>

        <NewsletterSignup />

        <div className="text-center mt-12">
          <p className="text-gray-500">
            Join <strong>500+</strong> mobile developers who are already learning with us
          </p>
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
    </div>
  )
}