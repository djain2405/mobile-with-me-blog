import Link from 'next/link'
import InteractiveTool from './InteractiveTool'

export default function ReactNativeVsNativePost() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Minimal Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-xl font-bold text-gray-900">Mobile With Me</Link>
            <Link href="/" className="text-gray-600 hover:text-blue-600 text-sm">← Back</Link>
          </div>
        </div>
      </header>

      {/* Main Content - Focus on Interactive Tool */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Toggle the factors that matter for your project and see the recommendation update live.
          </p>
        </div>

        {/* Your Interactive Tool - The Main Focus */}
        <InteractiveTool />

      </main>
    </div>
  )
}