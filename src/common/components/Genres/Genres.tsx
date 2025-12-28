import { useGetMovieGenresQuery } from '@/features/media/api/mediaApi.ts';
import type { Dispatch, SetStateAction } from 'react';
import s from './Genres.module.css';

type Props = {
  setGenres: Dispatch<SetStateAction<number[]>>;
  selectedGenres?: number[];
};

export const Genres = ({ setGenres, selectedGenres = [] }: Props) => {
  const { data, isLoading } = useGetMovieGenresQuery();

  if (isLoading) return <h1>Loading...</h1>;

  const addGenreHandler = (id: number) => {
    setGenres((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id],
    );
  };

  return (
    <div className={s.genres}>
      {data?.genres.map((genre) => (
        <button
          key={genre.id}
          onClick={() => addGenreHandler(genre.id)}
          data-selected={selectedGenres.includes(genre.id)}
          aria-pressed={selectedGenres.includes(genre.id)}
          type="button"
          className={s.genreButton}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
};
