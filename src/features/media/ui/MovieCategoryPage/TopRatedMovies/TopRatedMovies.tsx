import { useGetTopRatedMoviesQuery } from '@/features/media/api/mediaApi.ts';
import { FullMovieCategory } from '@/features/media/ui';

export const TopRatedMovies = () => (
  <FullMovieCategory
    titleName="Top Rated Movies"
    useGetQuery={useGetTopRatedMoviesQuery}
  />
);
