import { createSlice } from "@reduxjs/toolkit";
import { fetchExpenses } from "../Actions/expenseActions";

const expenseSlice = createSlice({
    name:'expenses',
    initialState:{
        expenses:[],
        status:"idle",
        error:null
    },
    reducers:{},
    extraReducers : (bulider)=>{
        bulider
        .addCase(fetchExpenses.pending,(state)=>{
            state.status = 'loading'
        })
        .addCase(fetchExpenses.fulfilled,(state,action)=>{
            state.status = "succeeded",
            state.expenses = action.payload
        })
        .addCase(fetchExpenses.rejected,(state,action)=>{
            state.status = "failed",
            state.error = action.payload?.message || 'Error Fetching expenses'
        })

    }
})

export default expenseSlice.reducer;