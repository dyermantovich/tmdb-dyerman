import { Favorite } from '@/common/components';
import { NavLink } from 'react-router';
import { Path } from '@/common/types';

type Props = {
  id: number;
  title: string;
  imagePath: string;
  rating: number;
};

export const PreviewMovieCard = ({ title, imagePath, rating, id }: Props) => (
  <span>
    <NavLink to={`${Path.CategoryMovies}/${id}`}>
      <img src={`https://image.tmdb.org/t/p/w200/${imagePath}`} alt={title} />
    </NavLink>
    <Favorite id={id} title={title} imagePath={imagePath} rating={rating} />
    <h4>{rating.toFixed(1)}</h4>
    <h3>{title}</h3>
  </span>
);
