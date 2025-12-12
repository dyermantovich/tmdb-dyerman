import { PreviewMovieCategory } from '@/common/components';
import {
  useGetNowPlayingMoviesQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
} from '@/features/media/api/mediaApi.ts';
import { Path } from '@/common/types';

export const PreviewSection = () => (
  <>
    <PreviewMovieCategory
      titleName="Popular Movies"
      useGetQuery={useGetPopularMoviesQuery}
      path={Path.PopularMovies}
    />
    <PreviewMovieCategory
      titleName="Top Rated Movies"
      useGetQuery={useGetTopRatedMoviesQuery}
      path={Path.TopRatedMovies}
    />
    <PreviewMovieCategory
      titleName="Upcoming Movies"
      useGetQuery={useGetUpcomingMoviesQuery}
      path={Path.UpcomingMovies}
    />
    <PreviewMovieCategory
      titleName="Now Playing Movies"
      useGetQuery={useGetNowPlayingMoviesQuery}
      path={Path.NowPlayingMovies}
    />
  </>
);
