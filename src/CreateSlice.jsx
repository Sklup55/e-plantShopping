// CreateSlice.jsx
import { createSlice } from "@reduxjs/toolkit";

export const CreateSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    
    addItem: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        if (state[index].find(item => state[index].name === name) {
        state[index].push({ state[index].name, state[index].image, state[index].cost, state[index].quantity: 1 });
    
    },

    removeItem: (state, action) => {
      const { payload: index } = action;
      state[index] = state[index].filter(state[index].name !== name);
      
    },
      
    updateQuantity: (state, action) => {
    const { payload: index } = action;
   const itemToUpdate = state[index].find(state[index].name == name);
      if (itemToUpdate) {
        state[index].quantity = quantity;
      }

  }
});

export const { addItem, removeItem, updateQuantity } = CreateSlice.actions;

export default CreateSlice.reducer;
