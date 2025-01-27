import { configureStore } from '@reduxjs/toolkit';
import totalPriceReducer from './src/slices/totalPriceSlice';

export const store = configureStore({
  reducer: {
    totalPrice: totalPriceReducer, // totalPrice reducer'ını store'a ekliyoruz
  },
});

// RootState ve AppDispatch tiplerini oluşturuyoruz
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
