import { useNavigate } from 'react-router';
import s from './Back.module.css';

export const Back = () => {
  const navigate = useNavigate();

  return (
    <button className={s.button} onClick={() => navigate(-1)}>
      Back
    </button>
  );
};
