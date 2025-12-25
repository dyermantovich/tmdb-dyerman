import { FullMovieCategory, SearchInput } from '@/common/components';
import { useGetMoviesByTitleQuery } from '@/features/media/api/mediaApi.ts';
import { useSearchParams } from 'react-router';

export const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  return (
    <div>
      <SearchInput />
      {query && (
        <FullMovieCategory
          titleName={query}
          useGetQuery={useGetMoviesByTitleQuery}
        />
      )}
    </div>
  );
};
