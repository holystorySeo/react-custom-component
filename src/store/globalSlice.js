import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuIdxInfo: {
    // source의 종류는 web, mobile
    source: '',
    menuIdx: 0,
  },
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    updateMenuIdx(state, action) {
      state.menuIdxInfo.source = action.payload.source;
      state.menuIdxInfo.menuIdx = action.payload.idx;
    },
  },
});

export const { updateMenuIdx } = globalSlice.actions;
export default globalSlice.reducer;
