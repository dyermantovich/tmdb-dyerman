import { PreviewMovieCard } from '@/common/components';
import { type MovieListResponse } from '@/common/types';

type Props = {
  data: MovieListResponse;
  pageSizeLimit?: number;
};

export const CategoryList = ({ data, pageSizeLimit }: Props) => {
  const movies = pageSizeLimit
    ? data.results.slice(0, pageSizeLimit)
    : data.results;

  return (
    <div>
      {movies.map((movie) => (
        <PreviewMovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          imagePath={movie.poster_path || ''}
          rating={movie.vote_average}
        />
      ))}
    </div>
  );
};
