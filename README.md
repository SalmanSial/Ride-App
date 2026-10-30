# Daily Drive

**Same Route. Shared Ride.**

Daily Drive is a React Native MVP prototype for commuters sharing an existing daily route and its fuel costs. The app is a local, offline-friendly presentation demo: it uses sample Lahore commuter data, in-memory state, and native confirmation dialogs. It does not connect to a backend, payment service, maps provider, identity service, or emergency service.

## Run the demo

### Requirements

- Node.js `>= 22.11.0`
- npm dependencies installed with `npm install`
- React Native Android or iOS development environment configured
- Android emulator/device, or iOS Simulator (macOS with Xcode)

### Start Metro

```sh
npm start
```

### Launch Android

With an Android emulator open or a device connected:

```sh
npm run android
```

### Launch iOS

On macOS with Xcode configured:

```sh
npm run ios
```

The app opens on a short splash screen, then onboarding. Choose **Get Started**, then **Continue as Demo User** to enter the app without credentials. The demo account is Salman Nawaz, with a Johar Town → Gulberg weekday route. You can also open the signup form and choose a city from the local city list.

## Demo journeys

- **Find a commute:** Home → Find a Ride → edit pickup, destination, and time → Find Matches → open a commuter profile → Request to Join.
- **Offer a commute:** Home → Offer a Ride → Publish My Route → browse matching demo commuters.
- **Requests and rides:** Home shortcuts open ride requests, request status, and ride history. Incoming requests can be accepted or declined.
- **Messages:** Open Messages or a commuter profile to view the sample conversation and send local messages.
- **Safety and costs:** Open Safety Center for demo-only actions, or Fuel Cost Calculator to calculate monthly fuel cost and per-person share.

## Technical notes

- React Native `0.87.1` with TypeScript; no extra runtime dependencies or API keys are required.
- `App.tsx` is the app entry point. `src/navigation/AppNavigator.tsx` owns the demo navigation and shared session state.
- Every major journey screen has its own module in `src/screens/` (onboarding, authentication, home, find, matches, offer, profile, rides, requests, chat, messages, safety, fuel calculator, and notifications).
- Reusable controls and layout are in `src/components/`; sample users and notifications live in `src/data/mockData.ts`; design tokens live in `src/theme.ts`.
- Navigation and presentation state are local; app data resets when the process restarts.
- The route illustration is a styled placeholder rather than a live map.
- Match percentages and cost contributions are illustrative demo values.
- SOS, verification badges, and identity details are mock presentation content. No real alert is sent and no identity check is performed.
- The native React Native module name remains `Ride` so it matches Android/iOS registration; the visible Android and iOS app names are **Daily Drive**.

## Validation

Run the TypeScript check with:

```sh
npx tsc --noEmit
```
