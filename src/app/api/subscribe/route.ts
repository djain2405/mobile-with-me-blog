import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

interface Subscriber {
  email: string
  subscribedAt: string
  id: string
}

const SUBSCRIBERS_FILE = path.join(process.cwd(), 'subscribers.json')

// Initialize subscribers file if it doesn't exist
function initializeSubscribersFile() {
  if (!fs.existsSync(SUBSCRIBERS_FILE)) {
    fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify([]))
  }
}

// Read subscribers from file
function getSubscribers(): Subscriber[] {
  initializeSubscribersFile()
  const data = fs.readFileSync(SUBSCRIBERS_FILE, 'utf8')
  return JSON.parse(data)
}

// Save subscribers to file
function saveSubscribers(subscribers: Subscriber[]) {
  fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2))
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check if already subscribed
    const subscribers = getSubscribers()
    const existingSubscriber = subscribers.find(sub => sub.email.toLowerCase() === email.toLowerCase())

    if (existingSubscriber) {
      return NextResponse.json(
        { error: 'Email is already subscribed' },
        { status: 409 }
      )
    }

    // Add new subscriber
    const newSubscriber: Subscriber = {
      email: email.toLowerCase(),
      subscribedAt: new Date().toISOString(),
      id: Date.now().toString()
    }

    subscribers.push(newSubscriber)
    saveSubscribers(subscribers)

    return NextResponse.json(
      { 
        message: 'Successfully subscribed!',
        subscriber: { email: newSubscriber.email, subscribedAt: newSubscriber.subscribedAt }
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const subscribers = getSubscribers()
    return NextResponse.json(
      { 
        count: subscribers.length,
        message: `Total subscribers: ${subscribers.length}`
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Get subscribers error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}