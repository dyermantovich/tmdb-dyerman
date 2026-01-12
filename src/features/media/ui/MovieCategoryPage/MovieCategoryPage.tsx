import { NavLink, Outlet } from 'react-router';
import { Path } from '@/common/types';
import s from './MovieCategoryPage.module.css';

export const MovieCategoryPage = () => (
  <section className={s.page}>
    <div className={s.header}></div>
    <nav className={s.nav}>
      <NavLink className={s.link} to={Path.PopularMovies}>
        Popular Movies
      </NavLink>
      <NavLink className={s.link} to={Path.TopRatedMovies}>
        Top Rated Movies
      </NavLink>
      <NavLink className={s.link} to={Path.UpcomingMovies}>
        Upcoming Movies
      </NavLink>
      <NavLink className={s.link} to={Path.NowPlayingMovies}>
        Now Playing Movies
      </NavLink>
    </nav>
    <div className={s.content}>
      <Outlet />
    </div>
  </section>
);
