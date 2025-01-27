import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from '../Reducers/courseReducers';
import { teamReducer } from '../Reducers/TeamMembers';
import serviceReducer from '../Reducers/serviceReducers'


const store = configureStore({
  reducer: {
    courses: coursesReducer, // Add the courses reducer
    services : serviceReducer,
    team: teamReducer,

  },
}); 

export default store;
