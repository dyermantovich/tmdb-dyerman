import { useGetMovieGenresQuery } from '@/features/media/api/mediaApi.ts';
import type { Dispatch, SetStateAction } from 'react';

type Props = {
  setGenres: Dispatch<SetStateAction<number[]>>;
};

export const Genres = ({ setGenres }: Props) => {
  const { data, isLoading } = useGetMovieGenresQuery();

  if (isLoading) return <h1>Loading...</h1>;

  const addGenreHandler = (id: number) => {
    setGenres((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id],
    );
  };

  return (
    <div>
      {data?.genres.map((genre) => (
        <button key={genre.id} onClick={() => addGenreHandler(genre.id)}>
          {genre.name}
        </button>
      ))}
    </div>
  );
};
