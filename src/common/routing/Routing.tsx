import { Route, Routes } from 'react-router';
import { Path } from '@/common/types';
import {
  MovieCategoryPage,
  Favorites,
  FilteredMovies,
  MainPage,
  Search,
} from '@/features/media/ui';
import {
  NowPlayingMovies,
  PopularMovies,
  TopRatedMovies,
  UpcomingMovies,
} from '@/features/media/ui/MovieCategoryPage';
import { FullMovieCard } from '@/common/components';

export const Routing = () => (
  <Routes>
    <Route path={Path.Main} element={<MainPage />} />
    <Route path={Path.CategoryMovies} element={<MovieCategoryPage />}>
      <Route path={Path.PopularMovies} element={<PopularMovies />} />
      <Route path={Path.TopRatedMovies} element={<TopRatedMovies />} />
      <Route path={Path.UpcomingMovies} element={<UpcomingMovies />} />
      <Route path={Path.NowPlayingMovies} element={<NowPlayingMovies />} />
    </Route>
    <Route path={Path.FilteredMovies} element={<FilteredMovies />} />
    <Route path={Path.Favorites} element={<Favorites />} />
    <Route path={Path.Search} element={<Search />} />
    <Route path={`/${Path.CategoryMovies}/:id`} element={<FullMovieCard />} />
  </Routes>
);
