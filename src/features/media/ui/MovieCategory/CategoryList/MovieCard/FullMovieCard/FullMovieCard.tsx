import { Back } from '@/common/components';
import s from './FullMovieCard.module.css';
import { CastInfo, MovieInfo, SimilarMoviesInfo } from '@/features/media/ui';
import { useParams } from 'react-router';
import { skipToken } from '@reduxjs/toolkit/query';
import { useGetMovieByIdQuery } from '@/features/media/api/mediaApi.ts';
import { ErrorPage } from '@/app/ui';

export const FullMovieCard = () => {
  const { id } = useParams();
  const isValidId = typeof id === 'string' && /^\d+$/.test(id);
  const { data, isFetching, isError } = useGetMovieByIdQuery(
    isValidId ? id : skipToken,
  );

  if (!isValidId || (isError && !isFetching)) {
    return <ErrorPage />;
  }

  if (!isFetching && !data) {
    return <ErrorPage />;
  }

  return (
    <section className={s.page}>
      <div className={s.topRow}>
        <Back />
      </div>
      <MovieInfo data={data} isFetching={isFetching} />
      <CastInfo />
      <SimilarMoviesInfo />
    </section>
  );
};
