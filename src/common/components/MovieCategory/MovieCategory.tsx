import { CategoryList, ViewMore } from '@/common/components';
import { type MovieListResponse, Path } from '@/common/types';
import s from './MovieCategory.module.css';

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
  <div className={s.root}>
    <div className={s.header}>
      <h3 className={s.title}>{titleName}</h3>
      {pageSizeLimit && <ViewMore path={`${Path.CategoryMovies}/${path}`} />}
    </div>
    <CategoryList data={data} pageSizeLimit={pageSizeLimit} />
  </div>
);
