import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log("state", state);
      console.log("action", action);
      const product = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.type_id === product.type_id
      );
      console.log("existingItem", existingItem);
      if (existingItem) {
        existingItem.totalQuantity += 1;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalPrice += product.price;
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );
      if (existingItem) {
        existingItem.totalQuantity -= 1;
        state.totalQuantity -= existingItem.price * existingItem.quantity;
        // state.totalPrice -= state.cartItems.filter(
        //   (item) => item.id !== productId
        // );
      }
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === productId
      );
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += existingItem.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === productId
      );
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= existingItem.price;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
