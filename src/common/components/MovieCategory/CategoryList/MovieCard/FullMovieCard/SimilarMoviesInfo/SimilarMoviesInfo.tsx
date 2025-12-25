import { PreviewMovieCard } from '@/common/components';
import { useGetSimilarMoviesByMovieIdQuery } from '@/features/media/api/mediaApi.ts';
import { useParams } from 'react-router';
import { skipToken } from '@reduxjs/toolkit/query';

export const SimilarMoviesInfo = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetSimilarMoviesByMovieIdQuery(
    id ?? skipToken,
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {data?.results.slice(0, 6).map((movie) => (
        <PreviewMovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          imagePath={movie.poster_path || ''}
          rating={Number(movie.vote_average)}
        />
      ))}
    </div>
  );
};
