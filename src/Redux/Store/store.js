// /redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from '../Reducers/courseReducers';

const store = configureStore({
  reducer: {
    courses: coursesReducer, // Add the courses reducer
  },
});

export default store;
