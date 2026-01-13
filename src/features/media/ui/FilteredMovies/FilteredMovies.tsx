import { useGetMovieUsingFilterQuery } from '@/features/media/api/mediaApi.ts';
import { SortBy, Rating } from '@/common/components';
import { useState } from 'react';
import type { SortByValues } from '@/common/types';
import s from './FilteredMovies.module.css';
import { FullMovieCategory, Genres } from '@/features/media/ui';

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
    <div className={s.layout}>
      <div className={s.panel}>
        <h3 className={s.title}>Filters / Sort</h3>
        <div className={s.control}>
          <SortBy sortBy={sortBy} setSortBy={setSortBy} />
        </div>
        <div className={s.control}>
          <Rating
            minValue={minValue}
            maxValue={maxValue}
            setMinValue={setMinValue}
            setMaxValue={setMaxValue}
          />
        </div>
        <div className={s.control}>
          <Genres setGenres={setGenres} selectedGenres={genres} />
        </div>
        <button className={s.resetButton} onClick={resetFiltersHandler}>
          Reset filters
        </button>
      </div>
      <div className={s.content}>
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
    </div>
  );
};
