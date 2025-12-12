import { useGetPopularMoviesQuery } from '@/features/media/api/mediaApi.ts';
import { FullMovieCategory } from '@/common/components';

export const PopularMovies = () => (
  <FullMovieCategory
    titleName="Popular Movies"
    useGetQuery={useGetPopularMoviesQuery}
  />
);
