import { createSlice } from "@reduxjs/toolkit";
import { fetchTestimonials,addTestimonials } from "../Actions/testimonialAction";

const testimonialSlice = createSlice({
    name: "testimonial",
    initialState: {
        testimonials: [],
        status : "idle",
        error: null
        },
        reducers: {},
        extraReducers: (builder) => {
            builder 
                   .addCase(fetchTestimonials.pending,(state)=>{
                    state.status = "loading"
                   })
                   .addCase(fetchTestimonials.fulfilled,(state,action)=>{
                    state.testimonials = action.payload
                    state.status = "succeeded"
                   })
                   .addCase(fetchTestimonials.rejected,(state,action)=>{
                    state.status = "failed"
                    state.error = action.payload?.message || "Error fetching testimonials"
                   })

                //    Handle Add Testimonials
                   .addCase(addTestimonials.pending,(state)=>{
                       state.status = 'loading'
                   })
                   .addCase(addTestimonials.fulfilled,(state,action)=>{
                    state.testimonials.push(action.payload);
                    state.status = "succeeded"
                   })
                   .addCase(addTestimonials.rejected,(state,action)=>{
                    state.status = "failed"
                    state.error = action.payload?.message || "Error adding testimonials"
                    })
        }
})
export default testimonialSlice.reducer;