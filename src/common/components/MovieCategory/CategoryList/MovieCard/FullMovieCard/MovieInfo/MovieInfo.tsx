import { useGetMovieByIdQuery } from '@/features/media/api/mediaApi.ts';
import { useParams } from 'react-router';
import { skipToken } from '@reduxjs/toolkit/query';

export const MovieInfo = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetMovieByIdQuery(id ?? skipToken);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w200/${data?.poster_path}`}
        alt={data?.title}
      />
      <h3>{data?.title}</h3>
      <h4>Release year: {data?.release_date.slice(0, 4)}</h4>
      <h4>{data?.vote_average.toFixed(1)}</h4>
      <div>
        <h4>Genres:</h4>
        <ul>
          {data?.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
      {data?.runtime != null && (
        <h4>
          {Math.floor(data.runtime / 60)}h {data.runtime % 60}m
        </h4>
      )}
      <p>{data?.overview}</p>
    </div>
  );
};
