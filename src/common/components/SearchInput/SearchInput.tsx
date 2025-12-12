import { useNavigate } from 'react-router';
import { Path } from '@/common/types';
import { useRef } from 'react';

export const SearchInput = () => {
  const titleRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();

  const searchForAMovieHandler = () => {
    const title = titleRef.current?.value.trim();
    if (title) {
      navigate(`${Path.Search}?query=${title}`);
    }
  };

  return (
    <div>
      <input ref={titleRef} type="search" placeholder="Search for a movie" />
      <button onClick={searchForAMovieHandler}>Search</button>
    </div>
  );
};
