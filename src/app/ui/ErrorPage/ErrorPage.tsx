import { NavLink } from 'react-router';
import { Path } from '@/common/types';
import s from './ErrorPage.module.css';

export const ErrorPage = () => (
  <main className={s.wrapper}>
    <div className={s.card}>
      <svg
        className={s.sign}
        viewBox="0 0 220 200"
        role="img"
        aria-label="404 warning sign"
      >
        <polygon
          points="110,12 208,180 12,180"
          fill="#F8D255"
          stroke="#D9A600"
          strokeWidth="8"
          strokeLinejoin="round"
        />
        <text
          x="110"
          y="128"
          textAnchor="middle"
          fontSize="48"
          fontWeight="700"
          fill="#1B1F2A"
          fontFamily="inherit"
        >
          404
        </text>
      </svg>
    </div>
    <p className={s.subtitle}>
      Page not found. We can&apos;t find what you&apos;re looking for
    </p>
    <NavLink className={s.button} to={Path.Main}>
      To main page
    </NavLink>
  </main>
);
