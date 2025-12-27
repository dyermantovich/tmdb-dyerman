import {
  Back,
  CastInfo,
  MovieInfo,
  SimilarMoviesInfo,
} from '@/common/components';
import s from './FullMovieCard.module.css';

export const FullMovieCard = () => {
  return (
    <section className={s.page}>
      <div className={s.topRow}>
        <Back />
      </div>
      <MovieInfo />
      <CastInfo />
      <SimilarMoviesInfo />
    </section>
  );
};
