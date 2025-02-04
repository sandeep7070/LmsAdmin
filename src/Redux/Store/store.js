import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from '../Reducers/courseReducers';
import { teamReducer } from '../Reducers/TeamMembers';
import serviceReducer from '../Reducers/serviceReducers'
import testimonialReducer from '../Reducers/testimonialReducers'
import { blogReducer } from '../Reducers/BlogReducer';
import expenseReducer from '../Reducers/expenseReducers'
import jobReducer from '../Reducers/jobReducers'


const store = configureStore({
  reducer: {
    courses: coursesReducer, 
    services : serviceReducer,
    team: teamReducer,
    testimonials : testimonialReducer,
    blog: blogReducer,
    expenses : expenseReducer,
    jobs : jobReducer

  },
}); 


export default store;
