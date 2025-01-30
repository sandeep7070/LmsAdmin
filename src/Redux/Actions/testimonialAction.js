import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTestimonials = createAsyncThunk(
  "testimonials/fetchTestimonials",
  async () => {
    try {
      const response = await fetch(
        "https://amsbackendlive.onrender.com/api/v1/testimonials/getAllTestimonials"
      );
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error at fetching testimonial ', error);
    }
  }
);


export const addTestimonials = createAsyncThunk(
    "testimonials/addTestimonials",
    async (testimonial) => {
        try {
            const response = await fetch('https://amsbackendlive.onrender.com/api/v1/testimonials/Create',{
                method: 'POST',
                body : testimonial
            });
            const data = await response.json();
            console.log(data)
            return data.data;
        } catch (error) {
           console.error('Error at adding testimonial', error);
        }
        }
)