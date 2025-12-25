import { useNavigate } from 'react-router';
import { Path } from '@/common/types';
import { type ChangeEvent, useState } from 'react';

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
    <div>
      <input
        value={inputTitle}
        onChange={(e) => changeTitleHandler(e)}
        type="search"
        placeholder="Search for a movie"
      />
      <button onClick={searchForAMovieHandler} disabled={!inputTitle.trim()}>
        Search
      </button>
    </div>
  );
};
