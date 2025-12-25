import { Favorite } from '@/common/components';
import { NavLink } from 'react-router';
import { Path } from '@/common/types';
import s from './PreviewMovieCard.module.css';

type Props = {
  id: number;
  title: string;
  imagePath: string;
  rating: number;
};

const getRatingClassName = (value: number) => {
  if (value >= 7.5) {
    return s.ratingGreat;
  } else if (value >= 5) {
    return s.ratingNormal;
  }
  return s.ratingBad;
};

export const PreviewMovieCard = ({ title, imagePath, rating, id }: Props) => (
  <span className={s.card}>
    <NavLink className={s.link} to={`${Path.CategoryMovies}/${id}`}>
      <img
        className={s.image}
        src={`https://image.tmdb.org/t/p/w200/${imagePath}`}
        alt={title}
      />
      <h4 className={`${s.rating} ${getRatingClassName(rating)}`}>
        {rating.toFixed(1)}
      </h4>
    </NavLink>
    <div className={s.favorite}>
      <Favorite id={id} title={title} imagePath={imagePath} rating={rating} />
    </div>
    <h3 className={s.title}>{title}</h3>
  </span>
);
