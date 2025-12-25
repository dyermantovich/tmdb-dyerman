import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  Genre,
  MovieCreditsResponse,
  MovieListParams,
  MovieListResponse,
  MovieResponse,
  SimilarMoviesResponse,
} from '@/common/types';

export const mediaApi = createApi({
  reducerPath: 'mediaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
    prepareHeaders: (headers) => {
      headers.set(
        'Authorization',
        `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`,
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchMedia: builder.query<MovieListResponse, void>({
      query: () => `authentication`,
    }),
    getPopularMovies: builder.query<MovieListResponse, MovieListParams>({
      query: ({ page = 1 }) => ({
        url: 'movie/popular',
        params: { page },
      }),
    }),
    getTopRatedMovies: builder.query<MovieListResponse, MovieListParams>({
      query: ({ page = 1 }) => ({
        url: 'movie/top_rated',
        params: { page },
      }),
    }),
    getUpcomingMovies: builder.query<MovieListResponse, MovieListParams>({
      query: ({ page = 1 }) => ({
        url: 'movie/upcoming',
        params: { page },
      }),
    }),
    getNowPlayingMovies: builder.query<MovieListResponse, MovieListParams>({
      query: ({ page = 1 }) => ({
        url: 'movie/now_playing',
        params: { page },
      }),
    }),
    getMoviesByTitle: builder.query<MovieListResponse, MovieListParams>({
      query: (params) => ({
        url: `search/movie`,
        params,
      }),
    }),
    getMovieById: builder.query<MovieResponse, string>({
      query: (id) => `movie/${id}`,
    }),
    getCastByMovieId: builder.query<MovieCreditsResponse, string>({
      query: (id) => `movie/${id}/credits`,
    }),
    getSimilarMoviesByMovieId: builder.query<SimilarMoviesResponse, string>({
      query: (id) => `movie/${id}/similar`,
    }),
    getMovieUsingFilter: builder.query<MovieListResponse, MovieListParams>({
      query: (params) => ({
        url: 'discover/movie',
        params: {
          query: params.query,
          page: params.page,
          sort_by: params.sort_by,
          'vote_average.gte': params.minRating,
          'vote_average.lte': params.maxRating,
          with_genres: params.genres,
        },
      }),
    }),
    getMovieGenres: builder.query<{ genres: Genre[] }, void>({
      query: () => ({
        url: 'genre/movie/list',
      }),
    }),
  }),
});

export const {
  useFetchMediaQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
  useGetNowPlayingMoviesQuery,
  useGetMoviesByTitleQuery,
  useGetMovieByIdQuery,
  useGetCastByMovieIdQuery,
  useGetSimilarMoviesByMovieIdQuery,
  useGetMovieUsingFilterQuery,
  useGetMovieGenresQuery,
} = mediaApi;
