import { useGetPopularMoviesQuery } from '@/features/media/api/mediaApi';
import { useEffect, useMemo, useState } from 'react';
import s from './HeroSection.module.css';
import { SearchInput } from '@/common/components';
import { BackgroundImage } from '@/features/media/ui/MainPage';
import { Skeleton } from '@mui/material';

export const HeroSection = () => {
  const [randomPage, setRandomPage] = useState<number | null>(null);

  const { data, isFetching } = useGetPopularMoviesQuery(
    { page: randomPage as number },
    { skip: randomPage === null },
  );

  const randomMovie = useMemo(() => {
    if (!data?.results?.length) return null;

    const index = Math.floor(Math.random() * data.results.length);
    return data.results[index];
  }, [data]);

  useEffect(() => {
    setRandomPage(Math.floor(Math.random() * 5) + 1);
  }, []);

  if (isFetching || !randomMovie) {
    return (
      <section className={s.hero}>
        <div className={s.content}>
          <Skeleton
            variant="rectangular"
            width={360}
            height={48}
            sx={{ borderRadius: 2 }}
          />
          <Skeleton
            variant="rectangular"
            width={420}
            height={24}
            sx={{ borderRadius: 2, mt: 1.5, mb: 2.5 }}
          />
          <div className={s.searchSkeleton}>
            <Skeleton
              variant="rectangular"
              width="100%"
              height={44}
              sx={{ borderRadius: 2 }}
            />
          </div>
        </div>
      </section>
    );
  }

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
