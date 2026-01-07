import s from './BackgroundImage.module.css';

type Props = {
  imagePath: string | null;
  alt: string;
};

export const BackgroundImage = ({ imagePath, alt }: Props) => {
  if (!imagePath) return null;

  return (
    <div className={s.wrapper} aria-hidden="true">
      <img
        className={s.image}
        src={`https://image.tmdb.org/t/p/w1280/${imagePath}`}
        alt={alt}
        loading="eager"
      />
      <div className={s.overlay} />
    </div>
  );
};
