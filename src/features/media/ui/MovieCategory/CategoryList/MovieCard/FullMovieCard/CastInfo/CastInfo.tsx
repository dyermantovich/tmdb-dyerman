import { useGetCastByMovieIdQuery } from '@/features/media/api/mediaApi.ts';
import { useParams } from 'react-router';
import { skipToken } from '@reduxjs/toolkit/query';
import s from './CastInfo.module.css';
import { Skeleton } from '@mui/material';

export const CastInfo = () => {
  const { id } = useParams();

  const { data, isFetching } = useGetCastByMovieIdQuery(id ?? skipToken);

  if (isFetching) {
    return (
      <section className={s.section}>
        <Skeleton variant="rectangular" width={140} height={20} />
        <ul className={s.list}>
          {Array.from({ length: 6 }).map((_, index) => (
            <li className={s.card} key={index}>
              <Skeleton variant="circular" width={96} height={96} />
              <Skeleton variant="rectangular" width={90} height={16} />
              <Skeleton variant="rectangular" width={70} height={14} />
            </li>
          ))}
        </ul>
      </section>
    );
  }

  if (!data?.cast.length) return null;

  return (
    <section className={s.section}>
      <h3 className={s.title}>Cast</h3>
      <ul className={s.list}>
        {data?.cast.slice(0, 6).map((person) => (
          <li className={s.card} key={person.id}>
            <img
              className={s.avatar}
              src={
                person.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${person.profile_path}`
                  : 'https://placehold.co/96x96/344363/FFF?text=No+Photo'
              }
              alt={person.name}
            />
            <p className={s.name}>{person.name}</p>
            <p className={s.role}>{person.character}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
