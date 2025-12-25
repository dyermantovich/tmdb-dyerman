import type { FavoriteType, MovieListItem } from '@/common/types';

export const toggleMovieStatus = ({
  id,
  props,
}: {
  id: number;
  props: FavoriteType;
}) => {
  if (localStorage.getItem('favorite') === null) {
    localStorage.setItem('favorite', JSON.stringify([]));
  }

  const localStorageArray = JSON.parse(
    localStorage.getItem('favorite') ?? '[]',
  );
  const exists = localStorageArray.some(
    (movie: MovieListItem) => movie.id === id,
  );
  let resultArray;

  if (!exists) {
    resultArray = [...localStorageArray, props];
  } else {
    resultArray = localStorageArray.filter(
      (movie: MovieListItem) => movie.id !== id,
    );
  }

  localStorage.setItem('favorite', JSON.stringify(resultArray));
};
