// venueSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const CreateSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  
},
  reducers: {

    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
          existingItem.quantity++;
        } else {
          state.items.push({ name, image, cost, quantity: 1 });
        }
      },

      removeItem: (state, action) => {
        const itemName = action.payload;
        state.items = state.items.filter(item => item.name !== itemName);
    },

    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
            itemToUpdate.quantity = quantity;
        }
    }, 

  },
});

export const { addItem, removeItem, updateQuantity } = CreateSlice.actions;

export default CreateSlice.reducer;