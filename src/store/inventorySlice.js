import { createSlice } from "@reduxjs/toolkit";

const inventorySlice = createSlice({
  name: 'Inventory',
  initialState: {},
  reducers: {
    productAdded: (state, action) => {
      const product = action.payload;
      state[product.id] = product;
    },
    productDeleted: (state, action) => {
      const productId = action.payload;
      delete state[productId];
    }
  }
});

export const { productAdded, productDeleted } = inventorySlice.actions;
export default inventorySlice.reducer;