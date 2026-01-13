import { previewSectionData } from '@/features/media/ui/MainPage/PreviewSection/previewSectionData.ts';
import { PreviewMovieCategory } from '@/features/media/ui';

export const PreviewSection = () => (
  <div>
    {previewSectionData.map((movieCategory, index) => (
      <PreviewMovieCategory
        key={index}
        titleName={movieCategory.titleName}
        useGetQuery={movieCategory.useGetQuery}
        path={movieCategory.path}
      />
    ))}
  </div>
);
