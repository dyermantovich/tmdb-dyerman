import type { FavoriteType } from '@/common/types';
import { toggleMovieStatus } from '@/common/components';

export const Favorite = (props: FavoriteType) => {
  const { id } = props;

  const changeMovieStatusHandler = () => {
    toggleMovieStatus({ id, props });
  };

  return (
    <div>
      <button onClick={changeMovieStatusHandler}>❤️</button>
    </div>
  );
};
