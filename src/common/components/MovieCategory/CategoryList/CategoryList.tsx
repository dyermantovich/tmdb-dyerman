import { PreviewMovieCard } from '@/common/components';
import { type MovieListResponse } from '@/common/types';
import s from './CategoryList.module.css';

type Props = {
  data: MovieListResponse;
  pageSizeLimit?: number;
};

export const CategoryList = ({ data, pageSizeLimit }: Props) => {
  const movies = pageSizeLimit
    ? data.results.slice(0, pageSizeLimit)
    : data.results;

  return (
    <div className={s.list}>
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
