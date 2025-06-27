import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    clearCart: (state) => {
      return [];
    },
  },
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer; 