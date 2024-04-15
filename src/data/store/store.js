import { configureStore } from '@reduxjs/toolkit';
import { FilterReducer } from './Slices/FilterSlice';
import { SortReducer } from './Slices/SortSlice';

export const store = configureStore({
  reducer: {
    filter: FilterReducer,
    sort: SortReducer,
  },
});
