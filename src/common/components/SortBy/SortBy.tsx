import { type ChangeEvent, type Dispatch, type SetStateAction } from 'react';
import type { SortByValues } from '@/common/types';

type Props = {
  sortBy: SortByValues;
  setSortBy: Dispatch<SetStateAction<SortByValues>>;
};

export const SortBy = ({ sortBy, setSortBy }: Props) => {
  const changeFilterHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.currentTarget.value as SortByValues);
  };

  return (
    <div>
      <h4>Sort by</h4>
      <label>
        <select value={sortBy} onChange={(e) => changeFilterHandler(e)}>
          <option value="popularity.desc">Popularity ↓</option>
          <option value="popularity.asc">Popularity ↑</option>
          <option value="vote_average.desc">Rating ↓</option>
          <option value="vote_average.asc">Rating ↑</option>
          <option value="primary_release_date.desc">Release Date ↓</option>
          <option value="primary_release_date.asc">Release Date ↑</option>
          <option value="original_title.asc">Title A-Z</option>
          <option value="original_title.desc">Title Z-A</option>
        </select>
      </label>
    </div>
  );
};
