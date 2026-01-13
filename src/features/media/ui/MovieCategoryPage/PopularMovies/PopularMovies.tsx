import { useGetPopularMoviesQuery } from '@/features/media/api/mediaApi.ts';
import { FullMovieCategory } from '@/features/media/ui';

export const PopularMovies = () => (
  <FullMovieCategory
    titleName="Popular Movies"
    useGetQuery={useGetPopularMoviesQuery}
  />
);
