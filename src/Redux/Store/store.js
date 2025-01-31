import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from '../Reducers/courseReducers';
import { teamReducer } from '../Reducers/TeamMembers';
import serviceReducer from '../Reducers/serviceReducers'
import testimonialReducer from '../Reducers/testimonialReducers'
<<<<<<< HEAD
import { blogReducer } from '../Reducers/BlogReducer';
=======
import expenseReducer from '../Reducers/expenseReducers'
>>>>>>> 46a4f0fc2bf940282c6d353f42ca4a3a6880b0f3


const store = configureStore({
  reducer: {
    courses: coursesReducer, 
    services : serviceReducer,
    team: teamReducer,
    testimonials : testimonialReducer,
<<<<<<< HEAD
    blog: blogReducer
=======
    expenses : expenseReducer,

>>>>>>> 46a4f0fc2bf940282c6d353f42ca4a3a6880b0f3
  },
}); 


export default store;
