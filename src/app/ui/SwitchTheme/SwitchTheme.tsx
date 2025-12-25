import { useAppDispatch, useAppSelector } from '@/common/hooks';
import { changeThemeAC, selectTheme } from '@/app/api/appSlice.ts';
import s from './SwitchTheme.module.css';

export const SwitchTheme = () => {
  const themeMode = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const changeThemeHandler = () => {
    dispatch(changeThemeAC(themeMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button className={s.button} onClick={changeThemeHandler}>
      <span className={s.emoji} aria-hidden>
        {themeMode === 'dark' ? '🌞' : '🌙'}
      </span>
      <span className={s.label}>
        {themeMode === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </span>
    </button>
  );
};
