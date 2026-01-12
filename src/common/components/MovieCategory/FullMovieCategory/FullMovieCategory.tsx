import { MovieCategory, Pagination } from '@/common/components';
import { useSearchParams } from 'react-router';
import type { MovieListParams, SortByValues } from '@/common/types';

type Props = {
  titleName?: string;
  useGetQuery: (params: MovieListParams) => any;
  args?: {
    sort_by?: SortByValues;
    minRating?: number;
    maxRating?: number;
    genres?: string;
  };
};

export const FullMovieCategory = ({ titleName, useGetQuery, args }: Props) => {
  const [params, setParams] = useSearchParams();
  const page = Number(params.get('page') || 1);
  const query = params.get('query') || '';

  const { data, isLoading } = useGetQuery({
    query,
    page,
    sort_by: args?.sort_by,
    minRating: args?.minRating,
    maxRating: args?.maxRating,
    genres: args?.genres,
  });

  const handlePageChange = (newPage: number) => {
    setParams({ ...(query && { query }), page: String(newPage) });
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (data.results.length) {
    return (
      <div>
        <MovieCategory titleName={titleName} data={data} />
        <Pagination
          currentPage={page}
          totalPages={data?.total_pages}
          onPageChange={handlePageChange}
        />
      </div>
    );
  }
  return <div>{`No matches found for "${query}".`}</div>;
};
