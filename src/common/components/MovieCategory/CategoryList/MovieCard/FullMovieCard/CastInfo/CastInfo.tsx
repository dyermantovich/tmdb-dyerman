import { useGetCastByMovieIdQuery } from '@/features/media/api/mediaApi.ts';
import { useParams } from 'react-router';
import { skipToken } from '@reduxjs/toolkit/query';

export const CastInfo = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetCastByMovieIdQuery(id ?? skipToken);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h4>Cast:</h4>
      <ul>
        {data?.cast.slice(0, 6).map((person) => (
          <li key={person.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${person.profile_path}`}
              alt={person.name}
            />
            <p>{person.name}</p>
            <p>{person.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
