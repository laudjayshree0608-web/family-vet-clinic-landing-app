# Environment Setup

Use separate env files for local development and Vercel.

## Local Development

1. Copy `.env.development.local.example` to `.env.development.local`.
2. Add your local values:
   - `RESEND_API_KEY`
   - `CLINIC_EMAIL_FROM`
   - `CLINIC_EMAIL_TO`
3. Run `npm run dev`.

Next.js automatically loads `.env.development.local` in development.

## Vercel Production

Set these variables in Vercel Project Settings (Production environment):
- `RESEND_API_KEY`
- `CLINIC_EMAIL_FROM`
- `CLINIC_EMAIL_TO`

Then redeploy with `npx vercel --prod`.

## Why `.env.local` Gets Overwritten

Vercel CLI can write or refresh `.env.local` when running env sync commands.
To avoid accidental local overrides, keep your local values in
`.env.development.local`.
