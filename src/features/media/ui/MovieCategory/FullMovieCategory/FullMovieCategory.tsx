import { Pagination } from '@/common/components';
import { useSearchParams } from 'react-router';
import type { MovieListParams, SortByValues } from '@/common/types';
import { Skeleton } from '@mui/material';
import s from './FullMovieCategory.module.css';
import { useEffect, useState } from 'react';
import { MovieCategory } from '@/features/media/ui';

type Props = {
  titleName?: string;
  useGetQuery: (params: MovieListParams) => any;
  args?: {
    sort_by?: SortByValues;
    minRating?: number;
    maxRating?: number;
    genres?: string;
  };
  showInitialSkeleton?: boolean;
};

export const FullMovieCategory = ({
  titleName,
  useGetQuery,
  args,
  showInitialSkeleton = true,
}: Props) => {
  const [params, setParams] = useSearchParams();
  const page = Number(params.get('page') || 1);
  const query = params.get('query') || '';

  const { data, isFetching } = useGetQuery({
    query,
    page,
    sort_by: args?.sort_by,
    minRating: args?.minRating,
    maxRating: args?.maxRating,
    genres: args?.genres,
  });
  const [cachedData, setCachedData] = useState<typeof data | null>(null);

  useEffect(() => {
    if (data) {
      setCachedData(data);
    }
  }, [data]);

  const handlePageChange = (newPage: number) => {
    setParams({ ...(query && { query }), page: String(newPage) });
  };

  if (isFetching && !cachedData) {
    if (!showInitialSkeleton) return null;
    return (
      <div className={s.root}>
        <div className={s.headerSkeleton}>
          <Skeleton variant="rectangular" width={220} height={22} />
          <Skeleton variant="rectangular" width={90} height={18} />
        </div>
        <div className={s.listSkeleton}>
          {Array.from({ length: 20 }).map((_, index) => (
            <div className={s.cardSkeleton} key={index}>
              <Skeleton
                variant="rectangular"
                width="100%"
                height={300}
                sx={{ borderRadius: 7 }}
              />
              <Skeleton variant="rectangular" width="80%" height={16} />
            </div>
          ))}
        </div>
        <div className={s.paginationSkeleton}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              width={38}
              height={36}
              sx={{ borderRadius: 2 }}
            />
          ))}
        </div>
      </div>
    );
  }

  const resolvedData = data ?? cachedData;

  if (resolvedData?.results.length) {
    return (
      <div>
        <MovieCategory titleName={titleName} data={resolvedData} />
        <Pagination
          currentPage={page}
          totalPages={resolvedData?.total_pages}
          onPageChange={handlePageChange}
        />
      </div>
    );
  }
  return <div>{`No matches found for "${query}".`}</div>;
};
