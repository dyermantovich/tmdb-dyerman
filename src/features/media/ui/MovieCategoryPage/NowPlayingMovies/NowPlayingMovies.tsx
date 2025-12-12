import { useGetNowPlayingMoviesQuery } from '@/features/media/api/mediaApi.ts';
import { FullMovieCategory } from '@/common/components';

export const NowPlayingMovies = () => (
  <FullMovieCategory
    titleName="Now playing Movies"
    useGetQuery={useGetNowPlayingMoviesQuery}
  />
);
