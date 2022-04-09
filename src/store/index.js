import { combineReducers, configureStore } from '@reduxjs/toolkit';
import globalSlice from './globalSlice';

const reducers = combineReducers({
  global: globalSlice,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
