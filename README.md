# Secure Google Sign-In Dashboard

A modernized, secure, and premium React web application template built with **Vite** and **TypeScript**, powered by **Firebase Authentication** and styled using responsive **Vanilla CSS** glassmorphic designs.

---

## Features

- ⚡️ **Vite 8 & TypeScript 6:** Near-instantaneous Hot Module Replacement (HMR) and strict compile-time type safety.
- 🔐 **Secure Environment Architecture:** No hardcoded Firebase configuration keys committed to version control. All secrets are managed using git-ignored local environment files.
- 👤 **Persistent Global Authentication:** Leverages Firebase's native `onAuthStateChanged` observable listener wrapped in a global React Context (`AuthProvider`) to synchronize session data cleanly across page reloads without UI flickering.
- 📱 **Flexible Auth Flow & Block Fallbacks:** Integrated switcher to toggle between **Popup Window** and **Page Redirect** modes, preventing mobile Safari/Chrome popup blocker interruptions.
- 💎 **Premium Glassmorphic UI:** Sleek modern interface with glow highlights, subtle hover animations, dynamic visual focus outlines (for enhanced digital accessibility/a11y), and a cybernetic nebula starfield background.
- 🔔 **Graceful UI Toast Alerts:** Interactive success and error feedback notifications powered by `react-hot-toast` (e.g., handling closed popups or blocker issues cleanly).
- ⏳ **Seamless Skeleton Loader:** Displays a matching glassmorphic skeleton card during authentication checks to ensure a polished user experience.

---

## Directory Structure

```text
src/
├── components/      # Reusable UI components (Button, Card, Loader/Skeleton)
├── config/          # Firebase SDK initialization and setup
├── context/         # AuthContext provider containing user status observables
├── hooks/           # Custom hook utilities (useAuth)
├── styles/          # Core CSS variables, layout stylesheets, and global rules
├── App.tsx          # Main dashboard coordinator page
├── index.tsx        # React mount entrypoint
└── vite-env.d.ts    # Vite compiler type definitions
```

---

## Getting Started

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### 2. Set Up Environment Variables
Create a file named `.env.local` in the root of the project and populate it with your Firebase app configuration parameters:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 3. Install Dependencies
Install all package configurations:

```bash
npm install
```

### 4. Start the Application
Run the local Vite development server:

```bash
npm run dev
```
By default, the server runs on [http://localhost:3000](http://localhost:3000).

---

## Available Scripts

In the project directory, you can run:

- **`npm run dev`**: Starts the Vite dev server with fast refresh.
- **`npm run build`**: Compiles TypeScript files (`tsc`) and builds the optimized production assets to the `/dist` directory.
- **`npm run preview`**: Runs a local server to preview the built production assets.
