import s from './Pagination.module.css';

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: Props) => {
  const getPages = () => {
    const pages: (number | 'dots')[] = [];
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(currentPage + 1, totalPages - 1);

    if (totalPages > 1) {
      pages.push(1);
    }

    if (start > 2) {
      pages.push('dots');
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) {
      pages.push('dots');
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className={s.pagination}>
      {getPages().map((page, index) =>
        page === 'dots' ? (
          <span className={s.dots} key={index}>
            ...
          </span>
        ) : (
          <button
            key={index}
            disabled={page === currentPage}
            className={`${s.pageButton} ${
              page === currentPage ? s.active : ''
            }`}
            onClick={() => onPageChange(page)}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        ),
      )}
    </div>
  );
};
