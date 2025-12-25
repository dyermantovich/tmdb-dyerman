import { MovieCategory } from '@/common/components';
import s from './PreviewMovieCategory.module.css';

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

  const { data, isLoading } = useGetQuery({ page: 1 });

  if (isLoading) {
    return <h1 className={s.loading}>Loading...</h1>;
  }

  return (
    <div className={s.section}>
      <MovieCategory
        titleName={titleName}
        data={data}
        pageSizeLimit={pageSizeLimit}
        path={path}
      />
    </div>
  );
};
