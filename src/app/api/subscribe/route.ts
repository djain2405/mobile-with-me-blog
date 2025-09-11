import { NextRequest, NextResponse } from 'next/server'

interface Subscriber {
  email: string
  subscribedAt: string
  id: string
}

// Check if we're running in production (Vercel)
const isProduction = process.env.NODE_ENV === 'production'

// In-memory storage for production (Vercel)
const memorySubscribers: Subscriber[] = []

// File-based storage for development
async function getSubscribersFromFile(): Promise<Subscriber[]> {
  if (isProduction) {
    return memorySubscribers
  }
  
  try {
    const fs = await import('fs')
    const path = await import('path')
    const SUBSCRIBERS_FILE = path.join(process.cwd(), 'subscribers.json')
    
    if (!fs.existsSync(SUBSCRIBERS_FILE)) {
      fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify([]))
      return []
    }
    
    const data = fs.readFileSync(SUBSCRIBERS_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading subscribers:', error)
    return []
  }
}

async function saveSubscribersToFile(subscribers: Subscriber[]): Promise<void> {
  if (isProduction) {
    // Clear the array and add new subscribers
    memorySubscribers.splice(0, memorySubscribers.length, ...subscribers)
    return
  }
  
  try {
    const fs = await import('fs')
    const path = await import('path')
    const SUBSCRIBERS_FILE = path.join(process.cwd(), 'subscribers.json')
    
    // Write to a temporary file first to prevent corruption during write
    const tempFile = SUBSCRIBERS_FILE + '.tmp'
    fs.writeFileSync(tempFile, JSON.stringify(subscribers, null, 2))
    
    // If write was successful, replace the original file
    fs.renameSync(tempFile, SUBSCRIBERS_FILE)
  } catch (error) {
    console.error('Error saving subscribers file:', error)
    throw error
  }
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
    const subscribers = await getSubscribersFromFile()
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
    await saveSubscribersToFile(subscribers)

    // In production, also send to webhook if configured
    if (isProduction && process.env.SUBSCRIBER_WEBHOOK_URL) {
      try {
        await fetch(process.env.SUBSCRIBER_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: newSubscriber.email,
            subscribedAt: newSubscriber.subscribedAt,
            id: newSubscriber.id,
            source: 'mobile-with-me-blog'
          })
        })
      } catch (webhookError) {
        console.error('Webhook notification failed:', webhookError)
        // Don't fail the subscription if webhook fails
      }
    }

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
    const subscribers = await getSubscribersFromFile()
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