import {
  Back,
  CastInfo,
  MovieInfo,
  SimilarMoviesInfo,
} from '@/common/components';

export const FullMovieCard = () => {
  return (
    <div>
      <Back />
      <MovieInfo />
      <CastInfo />
      <SimilarMoviesInfo />
    </div>
  );
};
