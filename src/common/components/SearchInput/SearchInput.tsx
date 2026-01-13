import { useLocation, useNavigate, useSearchParams } from 'react-router';
import { Path } from '@/common/types';
import { type ChangeEvent, useEffect, useState } from 'react';
import s from './SearchInput.module.css';

export const SearchInput = () => {
  const [inputTitle, setInputTitle] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (location.pathname === Path.Search) {
      setInputTitle(query);
    }
  }, [location.pathname, query]);

  const changeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.currentTarget.value;
    setInputTitle(nextValue);

    if (location.pathname === Path.Search && !nextValue.trim()) {
      setSearchParams({});
    }
  };

  const searchForAMovieHandler = () => {
    const trimmedValue = inputTitle.trim();
    if (!trimmedValue) return;
    navigate(`${Path.Search}?query=${encodeURIComponent(trimmedValue)}`);
  };

  return (
    <div className={s.wrapper}>
      <label className={s.field}>
        <span className={s.iconWrapper} aria-hidden="true">
          <span className={s.icon} />
        </span>
        <input
          className={s.input}
          value={inputTitle}
          onChange={(e) => changeTitleHandler(e)}
          type="search"
          placeholder="Search for a movie"
          aria-label="Search for a movie"
        />
      </label>
      <button
        className={s.button}
        onClick={searchForAMovieHandler}
        disabled={!inputTitle.trim()}
      >
        Search
      </button>
    </div>
  );
};
