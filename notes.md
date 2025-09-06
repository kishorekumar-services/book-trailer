*** Dont write any screens(pages) in app folder only routing logic goes ***
# Best practice (common in larger apps)
    Keep routing files in app/ → because Expo Router needs it.
    Keep actual screen implementations in src/screens/ → so they’re clean, reusable, and testable.
# That way:
    app/ stays thin, just wiring routes.
    src/screens/ holds your real UI logic.
    If you ever switch routing libs later (or add tests), your screens remain intact.



# 📦 NPM vs PNPM Cheat Sheet (2025)

A quick reference for npm and pnpm commands in modern projects.

| **Task**                     | **npm Command**              | **pnpm Command**                 | **Notes**                                        |
|------------------------------|------------------------------|----------------------------------|--------------------------------------------------|
| Install dependencies         | `npm install`                | `pnpm install`                   | Default install of `package.json` dependencies   |
| Install a package            | `npm install pkg`            | `npm install pkg`                   | Use `-D` / `--save-dev` for dev dependencies     |
| Install a dev dependency     | `npm install pkg --save-dev` | `npm install pkg -D`                | Same as above                                    |
| Remove a package             | `npm uninstall pkg`          | `pnpm remove pkg`                | Removes from `package.json`                      |
| Update a package             | `npm update pkg`             | `pnpm update pkg`                | Updates package in project                       |
| Run script                   | `npm run <script>`           | `pnpm run <script>`              | Executes scripts from `package.json`             |
| Execute local binary         | `npx <pkg>`                  | `pnpm exec <pkg>`                | Runs local project binaries                      |
| One-off package execution    | `npx <pkg>`                  | `pnpm dlx <pkg>`                 | Ideal for scaffolding tools                      |
| Check outdated packages      | `npm outdated`               | `pnpm outdated`                  | Lists packages with newer versions               |
| List installed packages      | `npm list`                   | `pnpm list`                      | Use `--depth=0` for top-level only               |
| Clean cache                  | `npm cache clean --force`    | `pnpm store prune`               | pnpm manages a global content-addressable store  |
| Init a new project           | `npm init <pkg>`             | `pnpm init <pkg>`                | Generates project scaffolds                      |
| Force install (ignore lock)  | `npm ci`                     | `pnpm install --frozen-lockfile` | Ensures exact lockfile installation              |


### Notes on pnpm

1. `npm install` → equivalent to `npm install`  
2. `pnpm remove` → equivalent to `npm uninstall`  
3. `pnpm exec` → runs binaries (like `npx`)  
4. `pnpm dlx` → one-off execution of packages (replacement for old `pnpx`)  
5. pnpm uses a **global content-addressable store**, so repeated packages across projects **don’t duplicate on disk**.


✅ **TL;DR**  
- `npm install/remove/update/run` = `npm install/uninstall/update/run`  
- `pnpm exec` = `npx`  
- `pnpm dlx` = `npx` for one-time package execution


## 1 Create project (TypeScript Expo template):

# core runtime helpers
npx create-expo-app@latest my-ui-app --template expo-template-blank-typescript
cd my-ui-app
 
OR 

pnpm create expo-app my-ui-app --template expo-template-blank-typescript

# 2 Install core (use expo install for native-compatible versions):

# core runtime helpers
npx expo install react-native-web react-native-gesture-handler react-native-screens react-native-safe-area-context @expo/vector-icons

# router + query + state
npm install expo-router @tanstack/react-query zustand

# animations & gesture (use expo install for compatibility)
npx expo install react-native-reanimated

(Use npx expo install when installing packages that rely on native modules so Expo selects compatible versions.)

## 3 Install NativeWind (Tailwind for RN) and tooling:

npm install nativewind
npm install -D tailwindcss prettier-plugin-tailwindcss
npx tailwindcss init


## 4 Add dev tools:

npm install -D eslint prettier eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser husky lint-staged


## 5 Configure Babel (Reanimated plugin must be last):
(Required for Reanimated to work properly).
// babel.config.js
module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    // other plugins...
    'react-native-reanimated/plugin', // <-- must be last
  ],
};