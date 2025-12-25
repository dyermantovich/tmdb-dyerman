import { CategoryList, ViewMore } from '@/common/components';
import { type MovieListResponse, Path } from '@/common/types';

type Props = {
  titleName?: string;
  data: MovieListResponse;
  pageSizeLimit?: number;
  path?: string;
};

export const MovieCategory = ({
  titleName,
  data,
  pageSizeLimit,
  path,
}: Props) => (
  <div>
    <div>
      <h3>{titleName}</h3>
      {pageSizeLimit && <ViewMore path={`${Path.CategoryMovies}/${path}`} />}
    </div>
    <CategoryList data={data} pageSizeLimit={pageSizeLimit} />
  </div>
);
