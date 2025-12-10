import {
  useFetchMediaQuery,
  useGetNowPlayingMoviesQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
} from '@/features/media/api/mediaApi.ts';
import { MovieCategory } from '@/common/components/MovieCategory/MovieCategory.tsx';
import { Path } from '@/common/types';

export const MainPage = () => {
  const { isLoading } = useFetchMediaQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Main Page</h1>
      <MovieCategory
        titleName="Popular Movies"
        useGetQuery={useGetPopularMoviesQuery}
        path={Path.PopularMovies}
      />
      <MovieCategory
        titleName="Top Rated Movies"
        useGetQuery={useGetTopRatedMoviesQuery}
        path={Path.TopRatedMovies}
      />
      <MovieCategory
        titleName="Upcoming Movies"
        useGetQuery={useGetUpcomingMoviesQuery}
        path={Path.UpcomingMovies}
      />
      <MovieCategory
        titleName="Now Playing Movies"
        useGetQuery={useGetNowPlayingMoviesQuery}
        path={Path.NowPlayingMovies}
      />
    </div>
  );
};
