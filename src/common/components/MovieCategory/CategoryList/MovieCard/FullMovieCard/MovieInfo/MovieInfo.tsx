import { useGetMovieByIdQuery } from '@/features/media/api/mediaApi.ts';
import { useParams } from 'react-router';
import { skipToken } from '@reduxjs/toolkit/query';
import s from './MovieInfo.module.css';
import { getRating } from '@/common/hooks';

export const MovieInfo = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetMovieByIdQuery(id ?? skipToken);

  if (isLoading) {
    return <h1>Loading...</h1>;
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
        <p className={s.overview}>{data?.overview}</p>
        <div className={s.genres}>
          <p className={s.genresTitle}>Genres</p>
          <ul className={s.genreList}>
            {data?.genres.map((genre) => (
              <li className={s.genre} key={genre.id}>
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
