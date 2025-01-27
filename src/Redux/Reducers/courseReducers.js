import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCourses,
  addCourse,
  deleteCourse,
  updateCourse,
} from "../Actions/courseActions";

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
    status: "idle", // Store the status (idle, loading, succeeded, failed)
    error: null, // Store any error if the fetch fails
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(addCourse.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addCourse.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (action.payload?.course) {
          state.courses.push(action.payload.course);
        }
      })
      .addCase(addCourse.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message || "Failed to add course.";
      })
      // Handle Delete Cases
      .addCase(deleteCourse.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.courses = state.courses.filter(
          (course) => course.id !== action.payload.id
        );
      })
      .addCase(deleteCourse.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message || "Failed to delete course.";
      })
      //  Handle Update Cases
      .addCase(updateCourse.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateCourse.fulfilled, (state, action) => {
        state.status = "succeeded";
        const courseIndex = state.courses.findIndex(
          (course) => course.id === action.payload.id
        );
        if (courseIndex > -1) {
          state.courses[courseIndex] = action.payload.course;
        }
      })
      .addCase(updateCourse.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message || "Failed to update course.";
      });
  },
});

export default coursesSlice.reducer;
