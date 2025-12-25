export const Path = {
  Main: '/',
  CategoryMovies: '/movies',
  FilteredMovies: '/filtered-movies',
  Favorites: '/favorites',
  Search: '/search',
  PopularMovies: 'popular',
  TopRatedMovies: 'top-rated',
  UpcomingMovies: 'upcoming',
  NowPlayingMovies: 'now-playing',
};

export type FavoriteType = {
  id: number;
  imagePath: string;
  rating: number;
  title: string;
};

export type MovieBase = {
  adult: boolean;
  backdrop_path: string | null;
  id: number;

  original_language: string;
  original_title: string;
  overview: string;

  popularity: number;
  poster_path: string | null;

  release_date: string;
  title: string;

  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieListItem = MovieBase & {
  genre_ids: number[];
};

export type MovieListResponse = {
  page: number;
  results: MovieListItem[];
  total_pages: number;
  total_results: number;
};

export type MovieResponse = MovieBase & {
  belongs_to_collection: Collection | null;
  budget: number;
  genres: Genre[];
  homepage: string;
  imdb_id: string | null;
  origin_country: string[];
  original_language: string;
  revenue: number;
  runtime: number | null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  spoken_languages: SpokenLanguage[];
  status: 'Released' | 'Post Production' | 'Planned';
  tagline: string;
};

export type MovieListParams = {
  query?: string;
  page?: number;
  sort_by?: SortByValues;
  minRating?: number;
  maxRating?: number;
  genres?: string;
};

export type Genre = {
  id: number;
  name: string;
};

export type Collection = {
  id: number;
  name: string;
  poster_path: string | null;
  backdrop_path: string | null;
};

export type ProductionCompany = {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
};

export type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

export type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type MovieCreditsResponse = {
  id: number;
  cast: CastMember[];
  crew: CrewMember[];
};

export type CreditPersonBase = {
  adult: boolean;
  gender: 0 | 1 | 2 | 3;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
};

export type CastMember = CreditPersonBase & {
  cast_id: number;
  character: string;
  order: number;
};

export type CrewMember = CreditPersonBase & {
  department: string;
  job: string;
};

export type SimilarMoviesResponse = {
  page: number;
  results: SimilarMovieListItem[];
  total_pages: number;
  total_results: number;
};

export type SimilarMovieListItem = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;

  original_language: string;
  original_title: string;
  overview: string;

  popularity: number;
  poster_path: string | null;

  release_date: string;

  title: string;
  video: boolean;

  vote_average: number;
  vote_count: number;
};

export type SortByValues =
  | 'popularity.desc'
  | 'popularity.asc'
  | 'vote_average.desc'
  | 'vote_average.asc'
  | 'primary_release_date.desc'
  | 'primary_release_date.asc'
  | 'original_title.asc'
  | 'original_title.desc';
