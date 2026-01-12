import s from '@/common/components/MovieCategory/CategoryList/MovieCard/PreviewMovieCard/PreviewMovieCard.module.css';

export const getRating = (value: number) => {
  if (value >= 7.5) {
    return s.ratingGreat;
  } else if (value >= 5) {
    return s.ratingNormal;
  }
  return s.ratingBad;
};
