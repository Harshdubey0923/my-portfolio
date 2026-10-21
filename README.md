# Harsh Dubey | Portfolio

Personal portfolio website of **Harsh Dubey**, a Junior Specialist based in Pune, India, working on IT service management, identity and access, and Python automation.

**Live site:** https://harshdubey-portfolio.vercel.app

## About the site

A single-page portfolio with these sections:

- About, with a short intro and my main tools
- Experience and education
- Projects, with a separate `/projects` page
- Skills and tools
- Certifications and achievements
- GitHub activity
- Contact form at `/contact`

It has light and dark themes, a command menu (press `Ctrl+K` or `Cmd+K`), and works on phones and desktops.

## Built with

- [Next.js](https://nextjs.org/) 16 and [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Framer Motion](https://www.framer.com/motion/), [Radix UI](https://www.radix-ui.com/) and [cmdk](https://cmdk.paco.me/)
- [Resend](https://resend.com/) for the contact form email
- [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/) for spam protection
- Hosted on [Vercel](https://vercel.com/)

## Run it locally

You need [Node.js](https://nodejs.org/) (LTS) and [Git](https://git-scm.com/).

```bash
git clone https://github.com/Harshdubey0923/my-portfolio.git
cd my-portfolio
npm install
cp .env.example .env.local
npm run dev
```

On Windows Command Prompt, use `copy .env.example .env.local` instead of `cp`.

Then open http://localhost:3000.

## Environment variables

Copy `.env.example` to `.env.local` and fill in your own values. Never commit `.env.local`.

| Variable | Used for |
| --- | --- |
| `RESEND_API_KEY` | Sending contact form emails |
| `CONTACT_FROM` | Sender address (must be on a domain verified in Resend) |
| `CONTACT_TO` | Inbox that receives the messages |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Turnstile widget on the contact form |
| `TURNSTILE_SECRET_KEY` | Server-side Turnstile check |
| `GITHUB_TOKEN` | GitHub activity section (token with no scopes) |
| `GITHUB_USERNAME` | Whose GitHub activity to show |

The site runs without the contact form variables, but the form will not send email. Cloudflare's published test keys can be used on localhost only, never in production.

## Project structure

```
app/            Pages, routes, API routes and share-card images
components/     UI components
lib/content/    All the text and data shown on the site
public/         Images, logos and icons
```

To change what the site says, edit the files in `lib/content/` (profile, experience, education, projects, stack and milestones).

## Deploy

1. Push the repo to GitHub.
2. Import it on [Vercel](https://vercel.com/new).
3. Add the environment variables above in **Settings > Environment Variables**.
4. Deploy. Vercel redeploys on every push to `main`.

## Contact

- LinkedIn: https://www.linkedin.com/in/harsh-dubey-dev/
- GitHub: https://github.com/Harshdubey0923

## Credits

This site started from the open-source portfolio by [Abhishek Singh](https://github.com/AbhishekSinghDev/heyabhishek). I replaced the content, images and design details with my own and added my own avatar and projects.
