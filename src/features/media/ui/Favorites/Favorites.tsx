import { PreviewMovieCard } from '@/common/components';
import type { FavoriteType } from '@/common/types';

export const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem('favorite') ?? '[]');

  return (
    <div>
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
