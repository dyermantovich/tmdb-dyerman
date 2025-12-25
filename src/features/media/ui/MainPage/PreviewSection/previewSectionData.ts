import {
  useGetNowPlayingMoviesQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
} from '@/features/media/api/mediaApi.ts';
import { Path } from '@/common/types';

export const previewSectionData = [
  {
    titleName: 'Popular Movies',
    useGetQuery: useGetPopularMoviesQuery,
    path: Path.PopularMovies,
  },
  {
    titleName: 'Top Rated Movies',
    useGetQuery: useGetTopRatedMoviesQuery,
    path: Path.TopRatedMovies,
  },
  {
    titleName: 'Upcoming Movies',
    useGetQuery: useGetUpcomingMoviesQuery,
    path: Path.UpcomingMovies,
  },
  {
    titleName: 'Now Playing Movies',
    useGetQuery: useGetNowPlayingMoviesQuery,
    path: Path.NowPlayingMovies,
  },
];
