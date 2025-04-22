// src/lib/redux/cartSlice.js
'use client';

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          image: newItem.image,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }
      state.totalQuantity++;
    },
    // Add other reducers as needed
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;