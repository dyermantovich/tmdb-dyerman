import { useNavigate } from 'react-router';
import { Path } from '@/common/types';
import { type ChangeEvent, useState } from 'react';
import s from './SearchInput.module.css';

export const SearchInput = () => {
  const [inputTitle, setInputTitle] = useState('');
  const navigate = useNavigate();

  const changeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.currentTarget.value);
  };

  const searchForAMovieHandler = () => {
    navigate(`${Path.Search}?query=${inputTitle}`);
  };

  return (
    <div className={s.wrapper}>
      <label className={s.field}>
        <span className={s.icon} aria-hidden="true">
          <svg viewBox="0 0 24 24" role="presentation">
            <path
              d="M11 4a7 7 0 0 1 5.55 11.27l3.09 3.09a1 1 0 0 1-1.42 1.41l-3.09-3.08A7 7 0 1 1 11 4zm0 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"
              fill="currentColor"
            />
          </svg>
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
