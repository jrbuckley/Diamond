# Diamond - College Baseball Score Tracking App

Diamond is a modern mobile application for tracking college baseball scores and statistics. Built with a focus on performance, real-time updates, and an intuitive user interface.

## Tech Stack

### Frontend
- **Expo (SDK 53)** - Cross-platform mobile development framework
- **React Native** - Native mobile UI framework
- **TypeScript** - Type-safe JavaScript
- **NativeWind** - Tailwind CSS for React Native
- **Zustand** - State management
- **TanStack Query** - Data fetching and caching
- **Expo Router** - File-based routing

### Backend
- **Express** - Node.js web framework
- **Redis** - In-memory data store for real-time features
- **Supabase** - PostgreSQL database and authentication

## Prerequisites

- Node.js (v18 or later)
- npm or yarn
- iOS Simulator (for Mac) or Android Studio (for Android development)
- Expo Go app (for testing on physical devices)

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
cd Diamond
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your environment variables:
```env
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npx expo start
```

5. Run on your preferred platform:
- Press `i` for iOS simulator
- Press `a` for Android emulator
- Scan QR code with Expo Go app for physical device testing

## Project Structure

```
Diamond/
├── app/                 # Expo Router screens and layouts
├── src/
│   ├── components/     # Reusable UI components
│   ├── hooks/         # Custom React hooks
│   │   └── api/       # TanStack Query hooks
│   ├── lib/           # API clients and configurations
│   ├── store/         # Zustand stores
│   ├── types/         # TypeScript type definitions
│   └── utils/         # Helper functions
├── assets/            # Images, fonts, and other static assets
└── babel.config.js    # Babel configuration
```

## Development Guidelines

- All screens and routes should be in the `app` directory following Expo Router conventions
- Components must be presentation-only (no API calls or global state mutations)
- Use TanStack Query for all async data fetching
- State management should be handled through Zustand stores
- Follow TypeScript best practices and maintain type safety
- Use NativeWind for styling with Tailwind CSS classes

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

[Your License Here] 