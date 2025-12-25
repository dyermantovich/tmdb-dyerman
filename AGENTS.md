# Repository Guidelines

## Project Structure & Module Organization
- `src/` contains the app code, organized by domain.
- `src/app/` holds app-level setup like the Redux store and layout UI (`src/app/ui/`).
- `src/features/` contains feature modules (currently `media/` for TMDB screens and API hooks).
- `src/common/` contains shared components, hooks, theme, types, and routing.
- Static assets live alongside components (e.g., `src/app/ui/Header/Logo/logo.svg`).

## Build, Test, and Development Commands
Use `pnpm` (lockfile present).
- `pnpm dev`: run the Vite dev server with HMR.
- `pnpm build`: type-check and build the production bundle.
- `pnpm preview`: serve the production build locally.
- `pnpm lint`: run ESLint on the project.

## Coding Style & Naming Conventions
- Language: TypeScript + React (`.ts`, `.tsx`).
- Indentation: 2 spaces (aligns with Prettier defaults).
- Components: PascalCase (`MovieCategory`, `PreviewMovieCard`).
- Hooks: `use` prefix (`useAppSelector`).
- Path aliases: use `@/` for `src/` imports (see `tsconfig.app.json`).
- Linting: ESLint with TypeScript + React Hooks + React Refresh configs. Format with Prettier.

## Testing Guidelines
- No testing framework is configured yet. If you add tests, document the tool and include `pnpm test` in `package.json`.
- Suggested naming: `*.test.ts` or `*.test.tsx` colocated with the module.

## Commit & Pull Request Guidelines
- Commit messages follow a lightweight Conventional Commits style: `feat: ...`, `chore: ...` (see git history).
- PRs should include a short summary, linked issue (if available), and screenshots for UI changes.

## Configuration Notes
- TMDB API access is required. Set `VITE_API_READ_ACCESS_TOKEN` in a local `.env` file before running the app.

