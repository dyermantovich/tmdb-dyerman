import { configureStore } from '@reduxjs/toolkit';
import { mediaApi } from '@/features/media/api/mediaApi.ts';
import { setupListeners } from '@reduxjs/toolkit/query';
import { appSlice } from '@/app/api/appSlice.ts';

export const store = configureStore({
  reducer: {
    [mediaApi.reducerPath]: mediaApi.reducer,
    [appSlice.name]: appSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mediaApi.middleware),
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

setupListeners(store.dispatch);
