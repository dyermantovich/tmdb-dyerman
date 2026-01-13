import { Navigate, Route, Routes } from 'react-router';
import { Path } from '@/common/types';
import {
  MovieCategoryPage,
  Favorites,
  FilteredMovies,
  MainPage,
  Search,
  FullMovieCard,
} from '@/features/media/ui';
import {
  NowPlayingMovies,
  PopularMovies,
  TopRatedMovies,
  UpcomingMovies,
} from '@/features/media/ui/MovieCategoryPage';
import { ErrorPage } from '@/app/ui';

export const Routing = () => (
  <Routes>
    <Route path={Path.Main} element={<MainPage />} />
    <Route path={Path.CategoryMovies} element={<MovieCategoryPage />}>
      <Route index element={<Navigate to={Path.PopularMovies} replace />} />
      <Route path={Path.PopularMovies} element={<PopularMovies />} />
      <Route path={Path.TopRatedMovies} element={<TopRatedMovies />} />
      <Route path={Path.UpcomingMovies} element={<UpcomingMovies />} />
      <Route path={Path.NowPlayingMovies} element={<NowPlayingMovies />} />
    </Route>
    <Route path={Path.FilteredMovies} element={<FilteredMovies />} />
    <Route path={Path.Favorites} element={<Favorites />} />
    <Route path={Path.Search} element={<Search />} />
    <Route path={`/${Path.CategoryMovies}/:id`} element={<FullMovieCard />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);
