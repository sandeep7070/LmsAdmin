import { configureStore } from "@reduxjs/toolkit";
import { teamReducer } from "../Reducer/TeamMembers.js";
// import  serviceReducer  from "../Reducer/Service.js";
 
export const store = configureStore({
  reducer: {
    team: teamReducer,
  }
});