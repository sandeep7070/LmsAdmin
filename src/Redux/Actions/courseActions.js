import { createAsyncThunk } from '@reduxjs/toolkit';

// This is the async action to fetch course data
export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses', // action type
  async () => {
    const response = await fetch('https://fakestoreapi.com/products/');
    const data = await response.json();
    return data; // This will be the payload that gets passed to the reducer
  }
);

// 