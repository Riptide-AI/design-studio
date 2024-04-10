import { createSlice } from '@reduxjs/toolkit';
import { sortOptions } from '@/data/blog';
const initialState = { sortList: sortOptions };

const SortSlice = createSlice({
  name: 'SortSlice',
  initialState,
  reducers: {
    isCheck: (state, action) => {
      const searchId = (element) => {
        if (element.name == action.payload)  return element;
      };
      state.sortList.map(e=>e.isActive =false)
      state.sortList.find(searchId).isActive = !state.sortList.find(searchId).isActive;
    },
  },
});

export const { isCheck } = SortSlice.actions;
export const SortReducer = SortSlice.reducer;
