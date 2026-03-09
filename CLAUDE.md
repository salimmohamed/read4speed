# Read for Speed

RSVP speed reading app for iOS.

## Stack
- Framework: React Native + Expo (SDK 52)
- Language: TypeScript (strict)
- Package Manager: Bun
- Lint/Format: Biome (NOT ESLint/Prettier)
- Styling: NativeWind (Tailwind for RN) — NOT StyleSheet.create
- Navigation: React Navigation native-stack

## Commands
- Install: `bun install`
- Run: `bun start`
- Test: `bun test`
- Lint: `bun run lint`
- Type check: `bun run typecheck`

## Architecture
Two screens connected by React Navigation native-stack:
- HomeScreen: file input, WPM selection, progress resume
- ReaderScreen: RSVP playback, context window, controls

## Directory Structure
- `src/screens/` — screen components
- `src/components/` — shared components
- `src/utils/` — utility functions and algorithms
- `src/contexts/` — React contexts (theme, language)
- `src/__tests__/` — test files

## Verify
- Build: `npx expo export 2>&1 | head -20` (catches missing config, broken imports, bad asset refs)

## Pre-commit Checks
`bun test && bun run lint && bun run typecheck && npx expo export 2>&1 | head -20`

## Conventions
- NativeWind v4 requires BOTH `metro.config.js` (`withNativeWind`) AND `babel.config.js` (`nativewind/babel` preset). If one is missing, styles silently fail.
- Use NativeWind `className` for styling, never `StyleSheet.create`
- Named exports everywhere, no default exports
- Biome for linting/formatting — never Prettier or ESLint
- 2-space indent, double quotes, always semicolons
- ES5 trailing commas, shorthand array types (`T[]` not `Array<T>`)
- ES module imports (import/export), not CommonJS
- Follow existing patterns before inventing new ones

## Git Workflow
- Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`
- Imperative mood, lowercase after type, no period, max ~72 chars
- Never add Co-Authored-By lines
- Stage specific files, never `git add -A`

Run the full pre-commit check chain: `bun test && bun run lint && bun run typecheck && npx expo export 2>&1 | head -20`
