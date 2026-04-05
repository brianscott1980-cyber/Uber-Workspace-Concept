# Uber Workspace Concept

A Next.js starter app for an internal Uber Workspace Concept experience focused on employees' day-to-day office life, including:

- Uber commute planning to and from the office
- Workspace and meeting room booking
- Office pass and access flows
- Team directory and colleague discovery
- After-work social event creation and participation

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the local development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Current Screens

- Home dashboard
- Travel planner
- Workspace booking
- People and teams
- After work events
- Digital office pass

## Notes

This is a starter UI setup with placeholder behavior and mock content to help accelerate product iteration.

## GitHub Pages Deployment

This repo is configured for static export and GitHub Pages deployment via GitHub Actions.

1. Push to `main`.
2. In GitHub repo settings, set Pages source to `GitHub Actions`.
3. The workflow `.github/workflows/deploy-pages.yml` builds and deploys the `out/` directory.
