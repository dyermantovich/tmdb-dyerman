import { useFetchMediaQuery } from '@/features/media/api/mediaApi.ts';
import { HeroSection, PreviewSection } from '@/features/media/ui/MainPage';

export const MainPage = () => {
  const { isLoading } = useFetchMediaQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <HeroSection />
      <PreviewSection />
    </div>
  );
};
