import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from '../Reducers/courseReducers';
<<<<<<< HEAD
import { teamReducer } from '../Reducers/TeamMembers';
=======
import serviceReducer from '../Reducers/serviceReducers'
>>>>>>> ccd5c8f6b5a27e29e9b156750daf47e947e75042

const store = configureStore({
  reducer: {
    courses: coursesReducer, // Add the courses reducer
<<<<<<< HEAD
    tean: teamReducer
=======
    services : serviceReducer,
>>>>>>> ccd5c8f6b5a27e29e9b156750daf47e947e75042
  },
}); 

export default store;
