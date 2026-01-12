import { PreviewMovieCard } from '@/common/components';
import type { FavoriteType } from '@/common/types';
import s from './Favorites.module.css';

export const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem('favorite') ?? '[]');

  if (!favorites.length) {
    return (
      <p className={s.empty}>
        Add movies to favorites to see them on this page.
      </p>
    );
  }

  return (
    <div className={s.list}>
      {favorites.map((movie: FavoriteType) => (
        <PreviewMovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          imagePath={
            movie.imagePath
              ? `https://image.tmdb.org/t/p/w200/${movie.imagePath}`
              : 'https://placehold.co/217x312/344363/FFF?text=No+poster'
          }
          rating={movie.rating}
        />
      ))}
    </div>
  );
};
