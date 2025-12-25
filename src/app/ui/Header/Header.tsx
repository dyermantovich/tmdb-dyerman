import { NavLink } from 'react-router';
import { Path } from '@/common/types';
import { Logo, SwitchTheme } from '@/app/ui';
import s from './Header.module.css';

export const Header = () => (
  <header className={s.header}>
    <NavLink className={s.brand} to={Path.Main}>
      <Logo />
    </NavLink>
    <nav className={s.nav}>
      <NavLink className={s.link} to={Path.Main}>
        Main
      </NavLink>
      <NavLink className={s.link} to={Path.CategoryMovies}>
        Category Movies
      </NavLink>
      <NavLink className={s.link} to={Path.FilteredMovies}>
        Filtered Movies
      </NavLink>
      <NavLink className={s.link} to={Path.Search}>
        Search
      </NavLink>
      <NavLink className={s.link} to={Path.Favorites}>
        Favorites
      </NavLink>
    </nav>
    <div className={s.actions}>
      <SwitchTheme />
    </div>
  </header>
);
