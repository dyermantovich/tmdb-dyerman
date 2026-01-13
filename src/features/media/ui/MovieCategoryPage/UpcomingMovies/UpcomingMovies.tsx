import { useGetUpcomingMoviesQuery } from '@/features/media/api/mediaApi.ts';
import { FullMovieCategory } from '@/features/media/ui';

export const UpcomingMovies = () => (
  <FullMovieCategory
    titleName="Upcoming Movies"
    useGetQuery={useGetUpcomingMoviesQuery}
  />
);
