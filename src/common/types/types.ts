export const Path = {
  Main: '/',
  CategoryMovies: '/movies',
  FilteredMovies: '/filteredMovies',
  Favorites: '/favorites',
  Search: '/search',
  PopularMovies: 'popular',
  TopRatedMovies: 'top-rated',
  UpcomingMovies: 'upcoming',
  NowPlayingMovies: 'now-playing',
};

export type MovieListResponse = {
  page: number;
  total_pages: number;
  total_results: number;
  results: MovieResult[];
};

export type MovieResult = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
