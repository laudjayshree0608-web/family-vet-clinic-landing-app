# Product Requirements Document (PRD)

## Project
Family Vet Clinic Landing Page (Next.js + Tailwind)

## Objective
Build a professional and elegant blue-white landing page for a family vet clinic that:
- Showcases services and pricing clearly
- Drives appointment bookings via hero form
- Provides easy contact actions (phone + location)
- Establishes trust with testimonials and visuals

## Audience
- Pet owners in and around Rajendra nagar, Indore
- New customers searching for a local veterinary clinic

## Brand and Design Direction
- Color theme: Blue and white
- Tone: Professional, caring, elegant
- Visual assets: Vet and pet photos
- Logo style: Text-based logo

## Functional Requirements
1. **Top Bar**
   - Social media profile links
   - Phone number: `0720.123.123`
   - Address: `Rajendra nagar, Indore`

2. **Sticky Main Navigation**
   - Menu items scroll to corresponding sections:
     - Home
     - Services
     - Pricing
     - Testimonials
     - Location
     - Contact

3. **Hero Section**
   - Main heading and supporting copy
   - Vet and pet images
   - Appointment form with fields:
     - Name
     - Phone
     - Email
     - Message
     - Send button

4. **Services Section**
   - Service cards with concise descriptions

5. **Pricing Section**
   - Table/list showing services and prices

6. **Testimonials Section**
   - Multiple testimonials for social proof

7. **Map Section**
   - Embedded map centered on `Rajendra nagar, Indore`

8. **Sticky Bottom Call Bar**
   - Persistent bottom bar with:
     - Phone number: `0720.123.123`
     - CTA text: `call to make an appointment`

9. **Email Integration (Resend)**
   - Form submits to `/api/appointment`
   - Backend sends email using Resend API
   - Environment variables:
     - `RESEND_API_KEY`
     - `CLINIC_EMAIL_FROM`
     - `CLINIC_EMAIL_TO`

## Non-Functional Requirements
- Responsive across mobile, tablet, desktop
- Clean semantic structure for maintainability
- Smooth in-page scrolling
- Basic form validation and submission feedback

## Deliverables
- Next.js app with Tailwind setup
- Landing page implementation with all requested sections
- Appointment API route prepared for Resend
- Environment template file (`.env.example`)

## Acceptance Criteria Checklist
- [x] Blue/white professional landing page
- [x] Text-based logo present
- [x] Top bar with social links, phone, and address
- [x] Sticky nav menu with section scrolling
- [x] Hero section includes appointment form
- [x] Form fields: name, phone, email, message, send
- [x] Services section
- [x] Pricing section
- [x] Vet and pet images included
- [x] Testimonials section
- [x] Map for Rajendra nagar, Indore
- [x] Sticky bottom bar with phone and appointment CTA
- [x] Resend-ready backend endpoint

## Future Enhancements
- Replace placeholder social links with real profile URLs
- Add analytics tracking for form submissions/calls
- Add CAPTCHA or bot protection for form endpoint
