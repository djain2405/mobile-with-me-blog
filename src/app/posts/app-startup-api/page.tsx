'use client'
import Link from 'next/link'

export default function AppStartupApiPost() {
  const handleLinkedInShare = () => {
    const postUrl = window.location.href
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=App%20Startup%20API%3A%20Speed%20Up%20Your%20Launch%20in%205%20Minutes%20🚀%20${encodeURIComponent(postUrl)}`
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
              <span className="text-sm text-gray-500">2 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              App Startup API: Speed Up Your Launch in 5 Minutes 🚀
            </h1>
            <div className="flex items-center mt-6 text-sm text-gray-500">
              <span>Sept 10, 2024</span>
              <span className="mx-2">•</span>
              <span>By Divya</span>
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Nobody likes waiting for apps to open. On Android, every extra millisecond at startup can hurt retention. That&apos;s where the Jetpack App Startup API comes in—it simplifies how you initialize components on launch.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Old Way 😬</h2>
            <p className="text-gray-700 mb-6">
              Before App Startup, we&apos;d stick initialization code in Application.onCreate() or use ContentProviders. Messy, hard to manage, and slowed down cold starts.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The New Way ✨</h2>
            <p className="text-gray-700 mb-4">
              With App Startup, you can initialize libraries lazily and only when they&apos;re actually needed.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Example:</h3>
            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                {`class AnalyticsInitializer : Initializer<Analytics> {
    override fun create(context: Context): Analytics {
        return Analytics.setup(context)
    }

    override fun dependencies(): List<Class<out Initializer<*>>> = emptyList()
}`}
              </pre>
            </div>

            <p className="text-gray-700 mb-4">
              Then just declare it in AndroidManifest.xml:
            </p>

            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                {`<provider
    android:name="androidx.startup.InitializationProvider"
    android:authorities="\${applicationId}.androidx-startup"
    android:exported="false"
    tools:node="merge">
    <!-- This entry makes AnalyticsInitializer discoverable. -->
    <meta-data  android:name="com.example.AnalyticsInitializer"
          android:value="androidx.startup" />
    `}
              </pre>
            </div>

            <p className="text-gray-700 mb-6">
              And boom — App Startup handles the rest.
            </p>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why It&apos;s Better ⚡</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Faster launches (no more bloated onCreate()).</li>
              <li>Lazy initialization → only load what&apos;s needed.</li>
              <li>Cleaner architecture → each library defines its own setup.</li>
            </ul>

            <div className="border-t border-gray-300 my-6"></div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">TL;DR</h2>
            <p className="text-gray-700 mb-4">
              If you want your Android app to launch faster, spend 5 minutes with the App Startup API. It&apos;s a small change that makes a big difference.
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
