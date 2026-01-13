import { Back } from '@/common/components';
import s from './FullMovieCard.module.css';
import { CastInfo, MovieInfo, SimilarMoviesInfo } from '@/features/media/ui';

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
