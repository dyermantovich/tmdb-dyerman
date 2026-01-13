import { useGetSimilarMoviesByMovieIdQuery } from '@/features/media/api/mediaApi.ts';
import { useParams } from 'react-router';
import { skipToken } from '@reduxjs/toolkit/query';
import s from './SimilarMoviesInfo.module.css';
import { Skeleton } from '@mui/material';
import { PreviewMovieCard } from '@/features/media/ui';

export const SimilarMoviesInfo = () => {
  const { id } = useParams();

  const { data, isFetching } = useGetSimilarMoviesByMovieIdQuery(
    id ?? skipToken,
  );

  if (isFetching) {
    return (
      <section className={s.section}>
        <Skeleton variant="rectangular" width={160} height={20} />
        <div className={s.list}>
          {Array.from({ length: 5 }).map((_, index) => (
            <div className={s.skeletonCard} key={index}>
              <Skeleton
                variant="rectangular"
                width={217}
                height={312}
                sx={{ borderRadius: 7 }}
              />
              <Skeleton variant="rectangular" width={160} height={16} />
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (!data?.results.length) return null;

  return (
    <section className={s.section}>
      <h3 className={s.title}>Similar Movies</h3>
      <div className={s.list}>
        {data?.results.slice(0, 5).map((movie) => (
          <PreviewMovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            imagePath={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                : 'https://placehold.co/217x312/344363/FFF?text=No+poster'
            }
            rating={Number(movie.vote_average)}
          />
        ))}
      </div>
    </section>
  );
};
