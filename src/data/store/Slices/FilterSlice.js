import { createSlice } from '@reduxjs/toolkit';
import { filterData } from '@/data/blog';
const initialState = { filterdata: filterData };

const FilterSlice = createSlice({
  name: 'FilterSlice',
  initialState,
  reducers: {
    isCheck: (state, action) => {
      const searchId = (element) => {
        if (element.id == action.payload)  return element;
      };
      state.filterdata.find(searchId).isChecked = !state.filterdata.find(searchId).isChecked;
    },
  },
});

export const { isCheck } = FilterSlice.actions;
export const FilterReducer = FilterSlice.reducer;
