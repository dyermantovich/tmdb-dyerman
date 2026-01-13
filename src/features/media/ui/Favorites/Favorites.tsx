import type { FavoriteType } from '@/common/types';
import s from './Favorites.module.css';
import { selectFavorites } from '@/app/api/appSlice.ts';
import { useAppSelector } from '@/common/hooks';
import { PreviewMovieCard } from '@/features/media/ui';

export const Favorites = () => {
  const favorites = useAppSelector(selectFavorites);

  return (
    <div>
      <h1>Favorites</h1>
      {favorites.length ? (
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
      ) : (
        <p className={s.empty}>
          Add movies to favorites to see them on this page.
        </p>
      )}
    </div>
  );
};
