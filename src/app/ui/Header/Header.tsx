import { NavLink } from 'react-router';
import { Path } from '@/common/types';
import { Logo, SwitchTheme } from '@/app/ui';

export const Header = () => (
  <div>
    <NavLink to={Path.Main}>
      <Logo />
    </NavLink>
    <NavLink to={Path.Main}>Main</NavLink>
    <NavLink to={Path.CategoryMovies}>Category Movies</NavLink>
    <NavLink to={Path.FilteredMovies}>Filtered Movies</NavLink>
    <NavLink to={Path.Search}>Search</NavLink>
    <NavLink to={Path.Favorites}>Favorites</NavLink>
    <SwitchTheme />
  </div>
);
