type Props = {
  title: string;
  imagePath: string;
  rating: number;
};

export const MovieCard = ({ title, imagePath, rating }: Props) => (
  <span>
    <img src={`https://image.tmdb.org/t/p/w200/${imagePath}`} alt={title} />
    <h4>{rating.toFixed(1)}</h4>
    <h3>{title}</h3>
  </span>
);
