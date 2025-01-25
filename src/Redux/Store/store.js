import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from '../Reducers/courseReducers';
import serviceReducer from '../Reducers/serviceReducers'

const store = configureStore({
  reducer: {
    courses: coursesReducer, // Add the courses reducer
    services : serviceReducer,
  },
}); 

export default store;
