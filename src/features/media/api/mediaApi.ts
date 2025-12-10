import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
    fetchMedia: builder.query<any, void>({
      query: () => 'authentication',
    }),
    getPopularMovies: builder.query<any, void>({
      query: () => 'movie/popular?language=en-US&page=1',
    }),
    getTopRatedMovies: builder.query<any, void>({
      query: () => 'movie/top_rated?language=en-US&page=1',
    }),
    getUpcomingMovies: builder.query<any, void>({
      query: () => 'movie/upcoming?language=en-US&page=1',
    }),
    getNowPlayingMovies: builder.query<any, void>({
      query: () => 'movie/now_playing?language=en-US&page=1',
    }),
  }),
});

export const {
  useFetchMediaQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
  useGetNowPlayingMoviesQuery,
} = mediaApi;
