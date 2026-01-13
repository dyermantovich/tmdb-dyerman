import { useGetMovieByIdQuery } from '@/features/media/api/mediaApi.ts';
import { useParams } from 'react-router';
import { skipToken } from '@reduxjs/toolkit/query';
import s from './MovieInfo.module.css';
import { Skeleton } from '@mui/material';
import { getRating } from '@/features/media/ui';

export const MovieInfo = () => {
  const { id } = useParams();

  const { data, isFetching } = useGetMovieByIdQuery(id ?? skipToken);

  if (isFetching) {
    return (
      <section className={s.section}>
        <Skeleton
          variant="rectangular"
          width={220}
          height={330}
          sx={{ borderRadius: 7 }}
        />
        <div className={s.content}>
          <div className={s.titleRow}>
            <Skeleton variant="rectangular" width={260} height={28} />
            <Skeleton variant="circular" width={38} height={38} />
          </div>
          <div className={s.meta}>
            <Skeleton variant="rectangular" width={140} height={18} />
            <Skeleton variant="rectangular" width={120} height={18} />
          </div>
          <div className={s.overview}>
            <Skeleton variant="rectangular" width="100%" height={16} />
            <Skeleton variant="rectangular" width="92%" height={16} />
            <Skeleton variant="rectangular" width="88%" height={16} />
          </div>
          <div className={s.genres}>
            <Skeleton variant="rectangular" width={80} height={18} />
            <ul className={s.genreList}>
              {Array.from({ length: 3 }).map((_, index) => (
                <li key={index}>
                  <Skeleton
                    variant="rectangular"
                    width={100}
                    height={30}
                    sx={{ borderRadius: 7 }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }

  const releaseYear = data?.release_date?.slice(0, 4);
  const runtime =
    data?.runtime != null
      ? `${Math.floor(data.runtime / 60)}h ${data.runtime % 60}m`
      : null;

  const rating = Number(data?.vote_average.toFixed(1));

  return (
    <section className={s.section}>
      <img
        className={s.poster}
        src={
          data?.poster_path
            ? `https://image.tmdb.org/t/p/w300/${data.poster_path}`
            : 'https://placehold.co/217x312/344363/FFF?text=No+poster'
        }
        alt={data?.title}
      />
      <div className={s.content}>
        <div className={s.titleRow}>
          <h2 className={s.title}>{data?.title}</h2>
          <span className={`${s.rating} ${getRating(rating)}`}>
            {rating && rating.toFixed(1)}
          </span>
        </div>
        <div className={s.meta}>
          {releaseYear && <span>Release year: {releaseYear}</span>}
          {runtime && <span>Runtime: {runtime}</span>}
        </div>
        <p className={s.overview}>
          {data?.overview || 'No overview available.'}
        </p>
        <div className={s.genres}>
          <p className={s.genresTitle}>Genres</p>
          <ul className={s.genreList}>
            {data?.genres.length ? (
              data.genres.map((genre) => (
                <li className={s.genre} key={genre.id}>
                  {genre.name}
                </li>
              ))
            ) : (
              <p>No genres available.</p>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};
