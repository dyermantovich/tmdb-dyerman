import { useGetTopRatedMoviesQuery } from '@/features/media/api/mediaApi.ts';
import { FullMovieCategory } from '@/common/components';

export const TopRatedMovies = () => (
  <FullMovieCategory
    titleName="Top Rated Movies"
    useGetQuery={useGetTopRatedMoviesQuery}
  />
);
