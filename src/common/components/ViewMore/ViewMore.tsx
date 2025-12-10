import { NavLink } from 'react-router';

type Props = {
  path: string;
};

export const ViewMore = ({ path }: Props) => {
  return <NavLink to={path}>View More</NavLink>;
};
