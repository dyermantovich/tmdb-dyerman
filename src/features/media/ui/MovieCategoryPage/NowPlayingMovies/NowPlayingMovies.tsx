import { useGetNowPlayingMoviesQuery } from '@/features/media/api/mediaApi.ts';
import { FullMovieCategory } from '@/features/media/ui';

export const NowPlayingMovies = () => (
  <FullMovieCategory
    titleName="Now playing Movies"
    useGetQuery={useGetNowPlayingMoviesQuery}
  />
);
