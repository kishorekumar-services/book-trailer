# ai-instructions.md
⚠️ **This file defines strict AI coding rules for this project. Any AI assistant, Copilot, or code generator working in this repo must follow these instructions exactly.**

---

## 📌 Project Scope
- **UI-only project**: build cross-platform UI (Web, iOS, Android) with **React Native + React Native Web + Expo**.
- **Backend is separate** (Flask or Spring Boot); do **not** implement backend logic here. Only call placeholder API client methods.
- **Cross-platform support** is required: everything must work in Expo-managed workflow for iOS, Android, and Web.

---

## ✅ Allowed Tech Stack
**Core Runtime**
- Expo (managed workflow, latest stable)
- React Native (Expo-compatible version only)
- React Native Web

**Routing**
- expo-router (file-based routing, backed by React Navigation v6+)

**UI & Styling**
- NativeWind (Tailwind CSS for React Native)
- tailwindcss + prettier-plugin-tailwindcss

**State Management**
- @tanstack/react-query (server state & caching)
- zustand (lightweight client state)

**Animations & Gestures**
- react-native-gesture-handler
- react-native-reanimated (v4+, with Babel plugin last)
- react-native-screens
- react-native-safe-area-context

**Icons**
- @expo/vector-icons

<!-- **Testing**
- Jest + React Native Testing Library (unit tests)
- Storybook (UI components)
- Maestro (E2E cross-platform)
- Playwright (web E2E) -->

**Build / CI / CD**
- EAS Build & EAS Submit (Expo Application Services)
- GitHub Actions / EAS Workflows for CI
- Vercel / Netlify (for web hosting, optional)

---

## ❌ Forbidden / Deprecated
- No backend code (Flask, Spring Boot, Node, etc.) in this repo.
- No deprecated React Native APIs: no `ListView`, `componentWillMount`, `componentWillReceiveProps`, or old `react-navigation` (< v6).
- No class components — functional components + hooks only.
- No platform-specific native modules unless explicitly approved and implemented via Expo prebuild/EAS config plugins.
- No libraries incompatible with react-native-web (must validate compatibility).
- No credentials, secrets, or direct API base URLs — always use placeholders (`apiClient.ts`).

---

## 📝 Coding Rules

- **Language:** TypeScript only (`strict: true`).
- **Components:** Functional components with typed props (`Props` interface).
- **Styling:** Use NativeWind classes. Use `style` only for dynamic values.
- **Accessibility:** Every interactive element must have `accessibilityLabel` and `testID`.
- **Imports:** Only from the allowed libraries list.
- **Data fetching:** Always via TanStack Query (`useQuery`) or `apiClient.ts` placeholder. Never implement backend.
- **Animations:** Use react-native-reanimated + gesture-handler. Ensure Babel plugin config is correct.
- **File Structure:**  
/app # expo-router screens
/src
/components
/screens
/hooks
/stores
/styles
/utils
tailwind.config.js
babel.config.js
tsconfig.json
eas.json

**Note:** Never pass `style` or `className` props to React.Fragment or any component that does not accept them (e.g., only pass `style` to View, Text, etc. in React Native). This will cause runtime errors. Always check component documentation before adding props.

<!-- ## 🧪 Testing Rules
- Each UI component must have at least one Jest/RNTL test and one Storybook story.
- Each screen must expose `testID` selectors for E2E automation.
- Maestro flows required for navigation/E2E.
- Web UI must be testable via Playwright. -->

---

## 🚦 Workflow / CI Rules
- Use `pnpm` package manager.
- Use `expo install` for native-compatible dependencies.
- Linting: ESLint + Prettier + Husky + lint-staged (no `any`, no unused vars).
- Build with `eas build`, submit with `eas submit`.
- Web deploy via Vercel/Netlify.


## ✅ PR Checklist (must pass before merge)
- [ ] TypeScript compiles (`pnpm tsc --noEmit`)
- [ ] ESLint passes
- [ ] Unit tests exist & pass
- [ ] Storybook story for new UI component
- [ ] Accessibility labels + testIDs present
- [ ] No forbidden libraries or backend code
- [ ] Only allowed stack used

## 🚫 If AI Is Asked for Out-of-Scope Code
- If asked for backend logic → Refuse, remind user backend is separate.
- If asked for deprecated library → Refuse, suggest modern allowed alternative.
- If asked for native-only plugin → Provide Expo config-plugin approach, require human approval.
- If asked for SEO/SSR Next.js → Explain it’s outside this project’s strict Expo RN Web scope.

## 💡 Prompt Templates (for AI usage)

**Generate a Screen**
Stack: Expo-managed, TypeScript, React Native + react-native-web
Routing: expo-router
Style: NativeWind
Animations: react-native-reanimated if needed
State: useTanStackQuery for server data; zustand for local state
Constraints: UI-only; use apiClient placeholder; no backend logic
Output: a single TSX file under src/screens named <Name>Screen.tsx with typed Props, testID, and accessibilityLabel.

<GENERATE SCREEN>
Stack: Expo-managed, TypeScript, React Native + react-native-web
Routing: expo-router
Style: NativeWind
Animations: react-native-reanimated if needed
State: useTanStackQuery for server data; use zustand for local state
Constraints: UI-only; do not implement backend (use apiClient placeholder)
Output: a single TSX file under src/screens named <Name>Screen.tsx with typed Props, testID, and accessibilityLabel.
</GENERATE SCREEN>

**Generate an Atom Component**
Type: Button with Icon
Stack: NativeWind + @expo/vector-icons
Props: (label, onPress, iconName?, disabled?)
Rules: functional component, typed props, testID, accessibilityLabel
Output: TSX file in src/components/atoms.

<GENERATE ATOM>
Type: Button with Icon
Stack: NativeWind + @expo/vector-icons
Requirements: props: (label, onPress, iconName?, disabled?), use Pressable, add testID "atom-button-<label>", add accessibilityLabel={label}, add types, export default
Output: TSX file in src/components/atoms
</GENERATE ATOM>

## 📚 Reference Docs
- Expo: https://docs.expo.dev  
- React Native Web: https://necolas.github.io/react-native-web  
- Expo Router: https://expo.github.io/router/docs  
- NativeWind: https://nativewind.dev  
- TanStack Query: https://tanstack.com/query/v5  
- Reanimated: https://docs.swmansion.com/react-native-reanimated  
- EAS Build: https://docs.expo.dev/build  
- Maestro: https://maestro.mobile.dev


⚠️ **All contributors and AI assistants must follow this guide strictly.**  
If in doubt → refuse and escalate to human approval.