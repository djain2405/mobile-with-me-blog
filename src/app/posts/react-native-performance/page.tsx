'use client'
import Link from 'next/link'

export default function ReactNativePerformancePost() {
  const handleLinkedInShare = () => {
    const postUrl = window.location.href
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=5%20React%20Native%20Performance%20Tips%20That%20Actually%20Work%20${encodeURIComponent(postUrl)}`
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
                React Native
              </span>
              <span className="text-sm text-gray-500">3 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 React Native Performance Tips That Actually Work
            </h1>
            <p className="text-gray-600 text-lg">
              Stop your app from lagging with these proven optimization techniques
            </p>
            <div className="flex items-center mt-6 text-sm text-gray-500">
              <span>August 17, 2024</span>
              <span className="mx-2">•</span>
              <span>By Divya</span>
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              React Native performance can be tricky. You build a great app, but then users complain about lag and slow animations. 
              Here are 5 practical tips that I&apos;ve used in production apps to boost performance significantly.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Use React.memo() Wisely</h2>
            <p className="text-gray-700 mb-4">
              Don&apos;t wrap every component in React.memo(). Only use it for components that:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Render frequently</li>
              <li>Have expensive render logic</li>
              <li>Receive props that don&apos;t change often</li>
            </ul>

            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <pre className="text-sm text-gray-800 overflow-x-auto">
{`// Good use case
const ExpensiveComponent = React.memo(({ data }) => {
  // Expensive calculations here
  return <div>{/* complex UI */}</div>
})

// Bad use case - simple component
const SimpleText = React.memo(({ text }) => <Text>{text}</Text>)`}
              </pre>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Optimize FlatList Rendering</h2>
            <p className="text-gray-700 mb-4">
              FlatList is powerful but can be a performance killer if not configured properly:
            </p>
            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <pre className="text-sm text-gray-800 overflow-x-auto">
{`<FlatList
  data={items}
  keyExtractor={(item) => item.id}
  getItemLayout={(data, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  })}
  removeClippedSubviews={true}
  maxToRenderPerBatch={10}
  windowSize={10}
/>`}
              </pre>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Avoid Inline Functions</h2>
            <p className="text-gray-700 mb-4">
              Inline functions create new function instances on every render, causing unnecessary re-renders:
            </p>
            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <pre className="text-sm text-gray-800 overflow-x-auto">
{`// ❌ Bad - creates new function every render
<Button onPress={() => handlePress(id)} />

// ✅ Good - stable reference
const handlePress = useCallback((id) => {
  // handle press logic
}, [])

<Button onPress={() => handlePress(id)} />`}
              </pre>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Use InteractionManager for Heavy Operations</h2>
            <p className="text-gray-700 mb-4">
              Defer heavy operations until after animations complete:
            </p>
            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <pre className="text-sm text-gray-800 overflow-x-auto">
{`import { InteractionManager } from 'react-native'

// Wait for animations to finish
InteractionManager.runAfterInteractions(() => {
  // Heavy operation here
  loadData()
  processImages()
})`}
              </pre>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Profile and Measure</h2>
            <p className="text-gray-700 mb-6">
              Always measure performance before and after optimizations. Use React DevTools Profiler and Flipper to identify bottlenecks.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-blue-800">
                <strong>Pro Tip:</strong> Start with the low-hanging fruit - remove unnecessary re-renders and optimize list rendering. 
                These two optimizations alone can improve performance by 20-30%.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Wrapping Up</h2>
            <p className="text-gray-700 mb-6">
              Performance optimization is an iterative process. Start with these tips, measure the impact, and then move on to more advanced techniques. 
              Remember, premature optimization is the root of all evil - optimize when you have actual performance issues.
            </p>

            <p className="text-gray-700">
              What performance tips have worked for you? Share your experiences in the comments below!
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
