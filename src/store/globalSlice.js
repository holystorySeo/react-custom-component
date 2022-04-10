import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuIdx: 0,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    updateIdx(state, action) {
      state.menuIdx = action.payload;
    },
  },
});

export const { updateIdx } = globalSlice.actions;
export default globalSlice.reducer;
