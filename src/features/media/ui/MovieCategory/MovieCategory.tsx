import { ViewMore } from '@/common/components';
import { type MovieListResponse, Path } from '@/common/types';
import s from './MovieCategory.module.css';
import { CategoryList } from '@/features/media/ui';

type Props = {
  titleName?: string;
  data: MovieListResponse;
  pageSizeLimit?: number;
  path?: string;
  columns?: number;
};

export const MovieCategory = ({
  titleName,
  data,
  pageSizeLimit,
  path,
  columns,
}: Props) => (
  <div className={s.root}>
    <div className={s.header}>
      <h3 className={s.title}>{titleName}</h3>
      {pageSizeLimit && <ViewMore path={`${Path.CategoryMovies}/${path}`} />}
    </div>
    <CategoryList data={data} pageSizeLimit={pageSizeLimit} columns={columns} />
  </div>
);
