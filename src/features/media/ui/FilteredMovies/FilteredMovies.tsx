import { useGetMovieUsingFilterQuery } from '@/features/media/api/mediaApi.ts';
import { FullMovieCategory, SortBy, Rating, Genres } from '@/common/components';
import { useState } from 'react';
import type { SortByValues } from '@/common/types';

export const FilteredMovies = () => {
  const [genres, setGenres] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState<SortByValues>('popularity.desc');
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10);

  const resetFiltersHandler = () => {
    setGenres([]);
    setSortBy('popularity.desc');
    setMinValue(0);
    setMaxValue(10);
  };

  return (
    <div>
      <div>
        <h3>Filters / Sort</h3>
        <SortBy sortBy={sortBy} setSortBy={setSortBy} />
        <Rating
          minValue={minValue}
          maxValue={maxValue}
          setMinValue={setMinValue}
          setMaxValue={setMaxValue}
        />
        <Genres setGenres={setGenres} />
        <button onClick={resetFiltersHandler}>Reset filters</button>
      </div>
      <FullMovieCategory
        useGetQuery={useGetMovieUsingFilterQuery}
        args={{
          sort_by: sortBy,
          minRating: minValue,
          maxRating: maxValue,
          genres: genres.join(','),
        }}
      />
    </div>
  );
};
