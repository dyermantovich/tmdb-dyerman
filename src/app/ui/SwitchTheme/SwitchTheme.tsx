import { useAppDispatch, useAppSelector } from '@/common/hooks';
import { changeThemeAC, selectTheme } from '@/app/api/appSlice.ts';

export const SwitchTheme = () => {
  const themeMode = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const changeThemeHandler = () => {
    dispatch(changeThemeAC(themeMode === 'dark' ? 'light' : 'dark'));
  };

  return <button onClick={changeThemeHandler}>Switch Theme</button>;
};
