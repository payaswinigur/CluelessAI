# FitCast Frontend (scaffold)

This workspace contains a scaffolded React frontend for the FitCast mobile app UI (based on a Figma design). It includes pages, components, and basic styling. It's a minimal starting point — you'll still need to install dependencies and connect a backend (AWS Amplify or REST API).

Figma design: https://www.figma.com/make/iVSy2evCxStJ1NzXTQsHmB/FitCast-Mobile-App-Design?node-id=0-4&t=S7STWlIsPPzb3Wdf-1

# Development


Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

This scaffold now uses Tailwind CSS and includes a local mock authentication provider that stores users and collections in your browser's localStorage. It's intended for local development and prototyping only — replace with a real backend (AWS Amplify or other) before production.

Quick notes:
- Sign up from the `/auth` page. Accounts are stored in localStorage under the key `fitcast_users` and the currently-signed-in user as `fitcast_user`.
- Collections are saved per-user in localStorage under `fitcast_collections_<email>`.
- To reset data, clear those keys in your browser storage or open DevTools -> Application -> Local Storage.

If you want, I can now scaffold Amplify configuration (schema, instructions) and wire the frontend to a real AWS backend. That step requires you to run the Amplify CLI with AWS credentials.

Quick preview without installing dependencies
-------------------------------------------
I added `preview.html` — a self-contained no-build preview that uses CDN React + Babel + Tailwind. Open it in your browser to try the app immediately (signup, create collections saved to localStorage).

You can open it directly (double-click / file open) or serve the repository root with a tiny static server. Example commands:

```bash
# using Python 3 built-in server
python3 -m http.server 5173

# or using the npm package 'serve' (if you have npm locally)
npx serve .
```

Then open http://localhost:5173/preview.html in your browser.

# What I added

- Vite + React scaffold (JS)
- Basic pages: Landing, Auth, Dashboard, Profile
- Components: Header, Footer, Card
- Global CSS (dark theme tokens)

# Next steps (recommended)

1. Decide backend (I recommend AWS Amplify for quick auth + GraphQL + DynamoDB integration).
2. If you pick Amplify: install the CLI, run `amplify init` and `amplify add auth` / `amplify add api`, then `amplify push`.
3. Add authentication flows and API calls in `src/pages/Auth.jsx` and other pages.
4. Export assets from Figma into `public/assets` and replace placeholders.

If you want, I can continue and wire up Amplify scaffolding (will need your AWS credentials to run the CLI locally), add sample GraphQL schema, and implement sign-up/sign-in flows.

FashionAI bot that suggests articles of fashionable clothing or accessories and outfits based on the weather and trends. 
