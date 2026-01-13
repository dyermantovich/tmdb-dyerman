import { type MovieListResponse } from '@/common/types';
import s from './CategoryList.module.css';
import { PreviewMovieCard } from '@/features/media/ui';

type Props = {
  data: MovieListResponse;
  pageSizeLimit?: number;
  columns?: number;
};

export const CategoryList = ({ data, pageSizeLimit, columns }: Props) => {
  const movies = pageSizeLimit
    ? data.results.slice(0, pageSizeLimit)
    : data.results;
  const gridTemplateColumns = columns
    ? `repeat(${columns}, minmax(0, 1fr))`
    : undefined;

  return (
    <div className={s.list} style={{ gridTemplateColumns }}>
      {movies.map((movie) => (
        <PreviewMovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          imagePath={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
              : 'https://placehold.co/217x312/344363/FFF?text=No+poster'
          }
          rating={movie.vote_average}
        />
      ))}
    </div>
  );
};
