import { SearchInput } from '@/common/components';
import { useGetMoviesByTitleQuery } from '@/features/media/api/mediaApi.ts';
import { useSearchParams } from 'react-router';
import { useEffect, useState } from 'react';
import s from './Search.module.css';
import { FullMovieCategory } from '@/features/media/ui';

export const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [hasSearchedOnce, setHasSearchedOnce] = useState(false);

  useEffect(() => {
    if (query) {
      setHasSearchedOnce(true);
    }
  }, [query]);
  return (
    <div className={s.page}>
      <h2 className={s.title}>Search Results</h2>
      <div className={s.searchRow}>
        <SearchInput />
      </div>
      {query ? (
        <FullMovieCategory
          titleName={`Results for "${query}"`}
          useGetQuery={useGetMoviesByTitleQuery}
          showInitialSkeleton={!hasSearchedOnce}
        />
      ) : (
        <h4 className={s.subtitle}>Enter a movie title to start searching.</h4>
      )}
    </div>
  );
};
