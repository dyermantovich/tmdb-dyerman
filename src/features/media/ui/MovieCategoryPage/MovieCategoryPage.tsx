import { NavLink, Outlet } from 'react-router';
import { Path } from '@/common/types';

export const MovieCategoryPage = () => (
  <div>
    <NavLink to={Path.PopularMovies}>Popular Movies</NavLink>
    <NavLink to={Path.TopRatedMovies}>Top Rated Movies</NavLink>
    <NavLink to={Path.UpcomingMovies}>Upcoming Movies</NavLink>
    <NavLink to={Path.NowPlayingMovies}>Now playing Movies</NavLink>
    <Outlet />
  </div>
);
