import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

interface Subscriber {
  email: string
  subscribedAt: string
  id: string
}

const SUBSCRIBERS_FILE = path.join(process.cwd(), 'subscribers.json')

function getSubscribers(): Subscriber[] {
  try {
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
    const subscribers = getSubscribers()
    
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