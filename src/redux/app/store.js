import { configureStore } from '@reduxjs/toolkit';
import { productsAPI } from './api/apiproduct';

export const store = configureStore({
  reducer: {
    [productsAPI.reducerPath]: productsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsAPI.middleware),
});
// setupListeners(store.dispatch);
