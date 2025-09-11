# Deployment Instructions

## The Issue
Vercel's serverless functions run in a read-only environment, so we can't write to local files in production.

## Solution Implemented
The subscription system now works differently in development vs production:

### Development (Local)
- Saves subscribers to `subscribers.json` file
- Full admin dashboard functionality

### Production (Vercel)
- Stores subscribers in memory (temporary)
- Optionally sends webhook notifications
- **Note**: In-memory storage means subscribers are lost on each deployment

## Recommended Production Setup

### Option 1: Webhook Integration (Easiest)
1. Set up a webhook service (Zapier, Make.com, or custom endpoint)
2. Add environment variable in Vercel:
   ```
   SUBSCRIBER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/your-webhook-url
   ```
3. Configure the webhook to:
   - Send you email notifications
   - Save to Google Sheets/Airtable
   - Add to your email marketing platform

### Option 2: Database Integration (Best)
For persistent storage, consider integrating:
- **Supabase** (Free tier, PostgreSQL)
- **PlanetScale** (Free tier, MySQL)
- **Vercel KV** (Redis, paid)

### Quick Zapier Setup
1. Go to https://zapier.com/apps/webhook/integrations
2. Create new Zap: Webhook → Gmail/Sheets/Email Service
3. Use the webhook URL as `SUBSCRIBER_WEBHOOK_URL`

## Current Status
✅ Fixed Vercel deployment errors
✅ Subscribers work in production (temporary storage)
✅ Webhook notifications ready
⚠️ Admin dashboard shows empty in production (use webhook data instead)

## Deploy to Vercel
```bash
npm run build
# Deploy via Vercel CLI or GitHub integration
```