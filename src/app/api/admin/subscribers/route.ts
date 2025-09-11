import { NextResponse } from 'next/server'

interface Subscriber {
  email: string
  subscribedAt: string
  id: string
}

// Check if we're running in production (Vercel)
const isProduction = process.env.NODE_ENV === 'production'

// In-memory storage for production (Vercel)
const memorySubscribers: Subscriber[] = []

async function getSubscribers(): Promise<Subscriber[]> {
  if (isProduction) {
    return memorySubscribers
  }
  
  try {
    const fs = await import('fs')
    const path = await import('path')
    const SUBSCRIBERS_FILE = path.join(process.cwd(), 'subscribers.json')
    
    if (!fs.existsSync(SUBSCRIBERS_FILE)) {
      return []
    }
    const data = fs.readFileSync(SUBSCRIBERS_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading subscribers file:', error)
    return []
  }
}

export async function GET() {
  try {
    const subscribers = await getSubscribers()
    
    // Sort by subscription date (newest first)
    const sortedSubscribers = subscribers.sort((a, b) => 
      new Date(b.subscribedAt).getTime() - new Date(a.subscribedAt).getTime()
    )

    // Calculate some basic stats
    const now = new Date()
    const thisMonth = subscribers.filter(sub => {
      const subDate = new Date(sub.subscribedAt)
      return subDate.getMonth() === now.getMonth() && 
             subDate.getFullYear() === now.getFullYear()
    }).length

    const thisWeek = subscribers.filter(sub => {
      const subDate = new Date(sub.subscribedAt)
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
      return subDate >= weekAgo
    }).length

    return NextResponse.json({
      subscribers: sortedSubscribers,
      stats: {
        total: subscribers.length,
        thisMonth,
        thisWeek,
        latest: subscribers.length > 0 ? sortedSubscribers[0] : null
      }
    })

  } catch (error) {
    console.error('Admin subscribers error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}