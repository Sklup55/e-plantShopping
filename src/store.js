import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CreateSlice';

export default configureStore({
  reducer: {
    cart: cartReducer
  },
});
