import { NavLink } from 'react-router';
import s from './ViewMore.module.css';

type Props = {
  path: string;
};

export const ViewMore = ({ path }: Props) => {
  return (
    <NavLink className={s.button} to={path}>
      View More
    </NavLink>
  );
};
