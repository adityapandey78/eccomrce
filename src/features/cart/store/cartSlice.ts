import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { Cart, CartItem, Product } from "../../../commons/types/product"

const initialState: Cart = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: Cart, action: PayloadAction<CartItem>) => {
      const storeQty = action.payload.quantity ?? 1;
      const existing = state.products.find(
        (p) => p.id === action.payload.id
      );

      if (existing) {
        existing.quantity = storeQty;
      } else {
        state.products.push({...action.payload,quantity:storeQty});
      }
    },
    increment: (state, action: PayloadAction<number>) => {
      const item = state.products.find((p) => p.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrement: (state, action: PayloadAction<number>) => {
      const item = state.products.find((p) => p.id === action.payload);
      if (!item) return;
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.products = state.products.filter((p) => p.id !== action.payload)
      }
    },
    removeItem: (state: Cart, action: PayloadAction<number>) => {
      state.products = state.products.filter((p) => p.id !== action.payload)
    }
  },
});
export const { addToCart, increment, decrement, removeItem } = cartSlice.actions
export default cartSlice.reducer
