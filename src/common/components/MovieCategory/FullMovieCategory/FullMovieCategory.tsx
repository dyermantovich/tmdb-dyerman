import { MovieCategory, Pagination } from '@/common/components';
import { useSearchParams } from 'react-router';

type Props = {
  titleName: string;
  useGetQuery: (params: { query?: string; page?: number }) => any;
};

export const FullMovieCategory = ({ titleName, useGetQuery }: Props) => {
  const [params, setParams] = useSearchParams();
  const page = Number(params.get('page') || 1);
  const query = params.get('query') || '';

  const { data, isLoading } = useGetQuery({ query, page });

  const handlePageChange = (newPage: number) => {
    setParams({ ...(query && { query }), page: String(newPage) });
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <MovieCategory titleName={titleName} data={data} />
      <Pagination
        currentPage={page}
        totalPages={data.total_pages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
