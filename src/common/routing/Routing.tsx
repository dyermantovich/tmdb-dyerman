import { Route, Routes } from 'react-router';
import { Path } from '@/common/types';
import {
  CategoryMovies,
  Favorites,
  FilteredMovies,
  MainPage,
  Search,
} from '@/features/media/ui';

export const Routing = () => {
  return (
    <Routes>
      <Route path={Path.Main} element={<MainPage />} />
      <Route path={Path.CategoryMovies} element={<CategoryMovies />} />
      <Route path={Path.FilteredMovies} element={<FilteredMovies />} />
      <Route path={Path.Favorites} element={<Favorites />} />
      <Route path={Path.Search} element={<Search />} />
    </Routes>
  );
};
