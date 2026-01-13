# TMDB Project
This project lets you browse and discover movies using The Movie Database (TMDB).

## Features
- 🎬 Movie categories — popular, top rated, upcoming, and now playing
- 🔎 Search by title — query-based search with a dedicated results page
- 🎛 Filters and sorting — rating range, genres, and sort options
- 📄 Movie details — full info view with cast and similar movies
- ❤️ Favorites — save and manage movies in `localStorage`
- 🌓 Theme switch — light/dark mode toggle
- 🔢 Pagination — navigate large lists easily

## Installation

1. Clone the repository
```bash
git clone https://github.com/dyermantovich/tmdb-dyerman.git
cd tmdb-dyerman
```

2. Install dependencies
```bash
pnpm i
```

3. Add environment variables
```bash
VITE_API_READ_ACCESS_TOKEN=your_tmdb_read_access_token
```

4. Start the development server
```bash
pnpm run dev
```

5. Optional: build for production
```bash
pnpm run build
pnpm run preview
```
