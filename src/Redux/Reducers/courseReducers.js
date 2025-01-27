// /redux/reducers/coursesSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchCourses } from '../Actions/courseActions';

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    coursesData: [],      // Store the list of courses
    status: 'idle',   // Store the status (idle, loading, succeeded, failed)
    error: null,      // Store any error if the fetch fails
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = 'loading'; // Set status to loading while fetching
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Set status to succeeded if fetch is successful
        state.courses = action.payload; // Save fetched data into the state
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = 'failed'; // Set status to failed if fetch fails
        state.error = action.error.message; // Capture error message
      });
  },
});

export default coursesSlice.reducer;
