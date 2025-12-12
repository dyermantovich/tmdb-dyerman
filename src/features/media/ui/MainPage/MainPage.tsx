import { useFetchMediaQuery } from '@/features/media/api/mediaApi.ts';
import { PreviewSection } from '@/features/media/ui/MainPage';
import { SearchInput } from '@/common/components';

export const MainPage = () => {
  const { isLoading } = useFetchMediaQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Welcome</h1>
      <h3>Browse highlighted titles from TMDB</h3>
      <SearchInput />
      <PreviewSection />
    </div>
  );
};
