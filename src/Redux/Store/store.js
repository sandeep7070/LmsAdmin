// /redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from '../Reducers/courseReducers';
import { teamReducer } from '../Reducers/TeamMembers';

const store = configureStore({
  reducer: {
    courses: coursesReducer, // Add the courses reducer
    tean: teamReducer
  },
});

export default store;
