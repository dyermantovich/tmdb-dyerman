import type { FavoriteType } from '@/common/types';
import { toggleFavoriteAC, selectFavorites } from '@/app/api/appSlice.ts';
import { useAppDispatch, useAppSelector } from '@/common/hooks';
import s from './Favorite.module.css';

export const Favorite = (props: FavoriteType) => {
  const { id } = props;
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavorites);
  const isFavorite = favorites.some((movie) => movie.id === id);

  const changeMovieStatusHandler = () => {
    dispatch(toggleFavoriteAC(props));
  };

  return (
    <button
      type="button"
      className={`${s.button} ${isFavorite ? s.buttonActive : ''}`}
      onClick={changeMovieStatusHandler}
      aria-pressed={isFavorite}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <span className={s.icon} />
    </button>
  );
};
