import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'appSlice',
  initialState: {
    theme: 'dark' as ThemeMode,
  },
  selectors: {
    selectTheme: (state) => state.theme,
  },
  reducers: (create) => ({
    changeThemeAC: create.reducer<ThemeMode>((state, action) => {
      state.theme = action.payload;
    }),
  }),
});

export const { changeThemeAC } = appSlice.actions;
export const { selectTheme } = appSlice.selectors;

export type ThemeMode = 'dark' | 'light';
