import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { MovieListResponse } from '@/common/types';

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
      query: () => 'authentication',
    }),
    getPopularMovies: builder.query<MovieListResponse, { page: number }>({
      query: ({ page = 1 }) => ({
        url: 'movie/popular',
        params: { page },
      }),
    }),
    getTopRatedMovies: builder.query<MovieListResponse, { page: number }>({
      query: ({ page = 1 }) => ({
        url: 'movie/top_rated',
        params: { page },
      }),
    }),
    getUpcomingMovies: builder.query<MovieListResponse, { page: number }>({
      query: ({ page = 1 }) => ({
        url: 'movie/upcoming',
        params: { page },
      }),
    }),
    getNowPlayingMovies: builder.query<MovieListResponse, { page: number }>({
      query: ({ page = 1 }) => ({
        url: 'movie/now_playing',
        params: { page },
      }),
    }),
    getMovieByTitle: builder.query<any, { page?: number; query?: string }>({
      query: (params) => ({
        url: `search/movie`,
        params,
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
  useGetMovieByTitleQuery,
} = mediaApi;
