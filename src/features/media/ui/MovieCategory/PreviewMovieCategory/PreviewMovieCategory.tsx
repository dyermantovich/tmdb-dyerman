import { Skeleton } from '@mui/material';
import s from './PreviewMovieCategory.module.css';
import { MovieCategory } from '@/features/media/ui';

type Props = {
  titleName: string;
  useGetQuery: (params: { page: number }) => any;
  path: string;
};

export const PreviewMovieCategory = ({
  titleName,
  useGetQuery,
  path,
}: Props) => {
  const pageSizeLimit = 6;

  const { data, isFetching } = useGetQuery({ page: 1 });

  if (isFetching) {
    return (
      <div className={s.section}>
        <div className={s.skeletonHeader}>
          <Skeleton variant="rectangular" width={180} height={22} />
          <Skeleton variant="rectangular" width={80} height={18} />
        </div>
        <div className={s.skeletonList}>
          {Array.from({ length: pageSizeLimit }).map((_, index) => (
            <div className={s.skeletonCard} key={index}>
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
      </div>
    );
  }

  return (
    <div className={s.section}>
      <MovieCategory
        titleName={titleName}
        data={data}
        pageSizeLimit={pageSizeLimit}
        columns={6}
        path={path}
      />
    </div>
  );
};
