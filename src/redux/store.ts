import { configureStore } from '@reduxjs/toolkit';
import { api } from '../api';
import userReducer from './slices/userSlice';

export const store = configureStore({
  devTools: true,

  reducer: {
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
