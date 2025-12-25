import { MovieCategory } from '@/common/components';

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
    return <h1>Loading...</h1>;
  }

  return (
    <MovieCategory
      titleName={titleName}
      data={data}
      pageSizeLimit={pageSizeLimit}
      path={path}
    />
  );
};
