import { MovieCard, ViewMore } from '@/common/components';

type Props = {
  titleName: string;
  data: any;
  path: string;
};

export const Category = ({ titleName, data, path }: Props) => (
  <div>
    <ViewMore path={path} />
    <h1>{titleName}</h1>
    {data.results.slice(0, 6).map((movie) => (
      <MovieCard
        key={movie.id}
        title={movie.original_title}
        imagePath={movie.poster_path}
        rating={movie.vote_average}
      />
    ))}
  </div>
);
