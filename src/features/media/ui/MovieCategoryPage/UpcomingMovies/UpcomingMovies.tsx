import { useGetUpcomingMoviesQuery } from '@/features/media/api/mediaApi.ts';
import { FullMovieCategory } from '@/common/components';

export const UpcomingMovies = () => (
  <FullMovieCategory
    titleName="Upcoming Movies"
    useGetQuery={useGetUpcomingMoviesQuery}
  />
);
