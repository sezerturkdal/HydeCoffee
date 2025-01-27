import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// State'in tipi
interface TotalPriceState {
  value: number;
}

// Başlangıç state'i
const initialState: TotalPriceState = {
  value: 0, // Başlangıç değeri
};

const totalPriceSlice = createSlice({
  name: 'totalPrice',
  initialState,
  reducers: {
    setTotalPrice: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    incrementTotalPrice: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementTotalPrice: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const { setTotalPrice, incrementTotalPrice, decrementTotalPrice } =
  totalPriceSlice.actions;

export default totalPriceSlice.reducer;
