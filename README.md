# neudental v1 - Dental Clinic Website

A premium, minimal, SEO-optimized dental clinic website for **neudental** (formerly Bludental) in Kodungaiyur, Chennai.
Built with React, TypeScript, Vite, TailwindCSS, and Firebase.

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite 6
- **Styling**: TailwindCSS v4
- **Database**: Firebase Firestore
- **Auth**: Firebase Anonymous Auth
- **Deployment**: Vercel (frontend) + Firebase (database)
- **Version**: v1

## Project Structure

```
bludental/
├── index-v1.html          # Entry HTML with SEO meta tags
├── package.json           # Dependencies (neudental-v1)
├── vite.config-v1.ts      # Vite build configuration
├── tsconfig.json          # TypeScript configuration
├── vercel.json            # Vercel deployment config
├── firestore.rules        # Firebase security rules
├── .env.example           # Environment variables template
├── .gitignore             # Git ignore rules
├── src/
│   ├── main-v1.tsx        # App entry point
│   ├── App-v1.tsx         # Root component
│   ├── firebase.ts        # Firebase initialization
│   ├── types.ts           # TypeScript interfaces
│   ├── data.ts            # Static data (treatments, FAQs)
│   ├── index.css          # Global styles
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── TreatmentDetailView.tsx
│       ├── BookingForm.tsx
│       ├── Testimonials.tsx
│       ├── LocationDetails.tsx
│       ├── SmileSlider.tsx
│       ├── SymptomChecker.tsx
│       └── Footer.tsx
```

## Setup

### 1. Clone the repository
```bash
git clone https://github.com/Jayakumar2000/bludental.git
cd bludental
npm install
```

### 2. Configure Firebase

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project (or use existing)
3. Enable **Firestore Database** and **Anonymous Authentication**
4. Copy your Firebase config

### 3. Set Environment Variables
```bash
cp .env.example .env
```
Edit `.env` with your actual Firebase values:
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 4. Run locally
```bash
npm run dev
```

---

## Firebase Hosting Setup

### Install Firebase CLI
```bash
npm install -g firebase-tools
firebase login
```

### Initialize Firebase in project
```bash
firebase init
```
- Select: **Firestore** and **Hosting**
- Hosting public directory: **dist**
- Configure as single-page app: **Yes**
- Don't overwrite index.html: **No**

### Deploy Firestore Rules
```bash
firebase deploy --only firestore:rules
```

### Build and deploy to Firebase Hosting
```bash
npm run build
firebase deploy --only hosting
```

---

## Vercel Deployment Setup

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Initial deployment v1"
git push origin main
```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import the **bludental** repository
4. Framework: **Vite** (auto-detected)
5. Build Command: `npm run build`
6. Output Directory: `dist`

### Step 3: Add Environment Variables in Vercel
In Vercel Dashboard > Project > Settings > Environment Variables, add:
```
VITE_FIREBASE_API_KEY = your_actual_api_key
VITE_FIREBASE_AUTH_DOMAIN = your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID = your_project_id
VITE_FIREBASE_STORAGE_BUCKET = your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID = your_sender_id
VITE_FIREBASE_APP_ID = your_app_id
VITE_FIREBASE_FIRESTORE_DB_ID = (default)
```
Apply to: **Production**, **Preview**, and **Development**

### Step 4: Deploy
Click **"Deploy"** - Vercel auto-deploys on every push to main.

---

## Firebase + Vercel Integration

The app uses:
- **Vercel** for hosting the React frontend (fast CDN, auto HTTPS)
- **Firebase Firestore** for real-time appointment data storage
- **Firebase Anonymous Auth** for secure per-user data isolation

After deployment, your site will be live at:
`https://bludental.vercel.app` (or custom domain)

---

## Clinic Details

- **Clinic**: neudental (formerly Bludental)
- **Doctor**: Dr. Swetha, BDS, FGDS - Saveetha Dental University
- **Location**: Door No. 13, 1st Main Road, Kodungaiyur (East), Chennai
- **Phone**: +91 9342367446
- **WhatsApp**: +91 9342367446

## License

Private - All rights reserved © neudental 2024-2025


<!-- Vercel deployment trigger: 2026-06-19T05:56:03.523Z -->


<!-- Deploy trigger 2: 2026-06-19T06:00:07.825Z -->
