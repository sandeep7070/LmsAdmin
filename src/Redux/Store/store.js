import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from '../Reducers/courseReducers';
import { teamReducer } from '../Reducers/TeamMembers';
import serviceReducer from '../Reducers/serviceReducers'
import testimonialReducer from '../Reducers/testimonialReducers'
import expenseReducer from '../Reducers/expenseReducers'


const store = configureStore({
  reducer: {
    courses: coursesReducer, 
    services : serviceReducer,
    team: teamReducer,
    testimonials : testimonialReducer,
    expenses : expenseReducer,

  },
}); 

export default store;
