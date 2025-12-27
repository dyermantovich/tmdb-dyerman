import { useGetCastByMovieIdQuery } from '@/features/media/api/mediaApi.ts';
import { useParams } from 'react-router';
import { skipToken } from '@reduxjs/toolkit/query';
import s from './CastInfo.module.css';

export const CastInfo = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetCastByMovieIdQuery(id ?? skipToken);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className={s.section}>
      <h3 className={s.title}>Cast</h3>
      <ul className={s.list}>
        {data?.cast.slice(0, 6).map((person) => (
          <li className={s.card} key={person.id}>
            <img
              className={s.avatar}
              src={`https://image.tmdb.org/t/p/w200/${person.profile_path}`}
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
