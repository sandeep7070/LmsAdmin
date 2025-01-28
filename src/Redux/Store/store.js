import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from '../Reducers/courseReducers';
import { teamReducer } from '../Reducers/TeamMembers';
import serviceReducer from '../Reducers/serviceReducers'
import testimonialReducer from '../Reducers/testimonialReducers'


const store = configureStore({
  reducer: {
    courses: coursesReducer, 
    services : serviceReducer,
    team: teamReducer,
    testimonials : testimonialReducer

  },
}); 

export default store;
