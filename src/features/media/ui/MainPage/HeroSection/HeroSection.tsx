import { useGetPopularMoviesQuery } from '@/features/media/api/mediaApi';
import { useEffect, useMemo, useState } from 'react';
import s from './HeroSection.module.css';
import { SearchInput } from '@/common/components';
import { BackgroundImage } from '@/features/media/ui/MainPage';

export const HeroSection = () => {
  const [randomPage, setRandomPage] = useState<number | null>(null);

  useEffect(() => {
    setRandomPage(Math.floor(Math.random() * 5) + 1);
  }, []);

  const { data, isLoading } = useGetPopularMoviesQuery(
    { page: randomPage as number },
    { skip: randomPage === null },
  );

  const randomMovie = useMemo(() => {
    if (!data?.results?.length) return null;

    const index = Math.floor(Math.random() * data.results.length);
    return data.results[index];
  }, [data]);

  if (isLoading || !randomMovie) return null;

  const imagePath = randomMovie.backdrop_path ?? randomMovie.poster_path;

  return (
    <section className={s.hero}>
      <BackgroundImage
        imagePath={imagePath}
        alt={randomMovie.title ?? 'Featured movie'}
      />
      <div className={s.content}>
        <h1 className={s.title}>Welcome</h1>
        <h3 className={s.subtitle}>Browse highlighted titles from TMDB</h3>
        <SearchInput />
      </div>
    </section>
  );
};
