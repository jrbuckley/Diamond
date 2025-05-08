# Diamond - College Baseball App

A modern React Native application for following college baseball scores, rankings, and team information. Built with TypeScript and following best practices for mobile development.

## Features

- 📱 Live game scores and schedules
- 🏆 Top 25 rankings
- ⭐️ Favorite teams functionality
- 🏫 Conference-based filtering
- 📊 Detailed game statistics
- 🔔 Real-time updates
- 🌙 Dark mode support

## Tech Stack

- React Native 0.73.4
- TypeScript
- React Navigation
- Zustand (State Management)
- React Query (Data Fetching)
- NativeWind (Styling)
- Axios (API Client)
- date-fns (Date Formatting)

## Prerequisites

- Node.js >= 18
- npm or yarn
- Xcode (for iOS development)
- Android Studio (for Android development)
- CocoaPods (for iOS dependencies)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/diamond.git
cd diamond
```

2. Install dependencies:

```bash
npm install
```

3. Install iOS dependencies:

```bash
cd ios && pod install && cd ..
```

4. Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

5. Update the `.env` file with your API keys and endpoints.

## Running the App

### iOS

```bash
npm run ios
```

### Android

```bash
npm run android
```

## Development

- `npm start` - Start the Metro bundler
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm test` - Run tests

## Project Structure

```
src/
├── api/          # API integration
├── components/   # Reusable components
├── features/     # Feature-specific code
│   ├── scores/   # Score-related features
│   ├── teams/    # Team-related features
│   └── games/    # Game-related features
├── hooks/        # Custom React hooks
├── navigation/   # Navigation configuration
├── screens/      # Screen components
├── state/        # State management
├── types/        # TypeScript types
└── utils/        # Utility functions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- College Baseball API providers
- React Native community
- Contributors and maintainers
