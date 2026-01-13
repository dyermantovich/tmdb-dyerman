import { createSlice } from '@reduxjs/toolkit';
import type { FavoriteType } from '@/common/types';

export const appSlice = createSlice({
  name: 'appSlice',
  initialState: {
    theme: localStorage.getItem('theme') as ThemeMode,
    status: 'notLiked' as MovieStatus,
    favorites: JSON.parse(
      localStorage.getItem('favorite') ?? '[]',
    ) as FavoriteType[],
  },
  selectors: {
    selectTheme: (state) => state.theme,
    selectFavorites: (state) => state.favorites,
  },
  reducers: (create) => ({
    changeThemeAC: create.reducer<ThemeMode>((state, action) => {
      state.theme = action.payload;
      localStorage.setItem('theme', action.payload);
    }),
    toggleFavoriteAC: create.reducer<FavoriteType>((state, action) => {
      const exists = state.favorites.some(
        (movie) => movie.id === action.payload.id,
      );

      if (exists) {
        state.favorites = state.favorites.filter(
          (movie) => movie.id !== action.payload.id,
        );
      } else {
        state.favorites.push(action.payload);
      }

      localStorage.setItem('favorite', JSON.stringify(state.favorites));
    }),
  }),
});

export const { changeThemeAC, toggleFavoriteAC } = appSlice.actions;
export const { selectTheme, selectFavorites } = appSlice.selectors;

export type ThemeMode = 'dark' | 'light';
export type MovieStatus = 'notLiked' | 'liked';
