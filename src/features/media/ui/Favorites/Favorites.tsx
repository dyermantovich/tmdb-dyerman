import { PreviewMovieCard } from '@/common/components';
import type { FavoriteType } from '@/common/types';
import s from './Favorites.module.css';

export const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem('favorite') ?? '[]');

  return (
    <div className={s.list}>
      {favorites.map((movie: FavoriteType) => (
        <PreviewMovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          imagePath={movie.imagePath}
          rating={movie.rating}
        />
      ))}
    </div>
  );
};
