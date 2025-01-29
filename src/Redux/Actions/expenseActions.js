import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchExpenses = createAsyncThunk(
    'expenses/fetchExpenses',
    async ()=>{
        try {
            const res = await fetch('https://amsbackendlive.onrender.com/api/v1/expense/getAllExpenses');
            const data = await res.json();
            console.log(data);
            return data.expenses;
        } catch (error) {
            console.log(error)
        }
    }
)