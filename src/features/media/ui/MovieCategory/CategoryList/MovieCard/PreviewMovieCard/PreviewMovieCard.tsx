import { NavLink } from 'react-router';
import { Path } from '@/common/types';
import s from './PreviewMovieCard.module.css';
import { Favorite, getRating } from '@/features/media/ui';

type Props = {
  id: number;
  title: string;
  imagePath: string;
  rating: number;
};

export const PreviewMovieCard = ({ title, imagePath, rating, id }: Props) => (
  <span className={s.card}>
    <NavLink className={s.link} to={`${Path.CategoryMovies}/${id}`}>
      <img className={s.image} src={imagePath} alt={title} />
      <h4 className={`${s.rating} ${getRating(rating)}`}>
        {rating && rating.toFixed(1)}
      </h4>
    </NavLink>
    <div className={s.favorite}>
      <Favorite id={id} title={title} imagePath={imagePath} rating={rating} />
    </div>
    <h3 className={s.title}>{title}</h3>
  </span>
);
