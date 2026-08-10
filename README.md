# Starlight Reels — N. Sathaiah

Production-quality Next.js website for **N. Sathaiah**, Tamil film critic, story listener, and champion of storytellers.

## Tech Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- MongoDB + Mongoose
- SVG text CAPTCHA (`svg-captcha`)
- Google Analytics 4

## Getting Started

```bash
cd website
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

| Variable | Description |
|----------|-------------|
| `MONGODB_URI` | MongoDB connection string |
| `MONGODB_DB` | Database name (optional) |
| `CAPTCHA_SECRET_KEY` | Secret used to sign CAPTCHA cookies (any long random string) |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID |

## Story Submission API

`POST /api/story-submission` accepts JSON with:

- `name`, `email`, `storyTitle`, `synopsis`, `genre` (required)
- `phone`, `additionalInfo` (optional)
- `consent` (boolean, required)
- `captchaToken` (required)

The API validates input server-side, verifies the text CAPTCHA, applies basic rate limiting, and stores submissions in MongoDB.

## Content

All page content is sourced from the PDFs in the project root and organized in `src/content/`. Edit those files to update site copy without touching JSX.

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```
