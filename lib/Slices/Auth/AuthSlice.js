import axios from "axios"

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

export const SetData = createAsyncThunk('SetData' , async({formData}) => {
    console.log(formData);
    
    const Response = await axios.post('/pages/api/Auth' , {type : "Signup" ,Data : formData})
    return Response.data
})

const initialState  = {
    Data : [],
    Success : false,
}

const AuthReducer = createSlice({
    initialState , 
    name : "AuthReducer",
    extraReducers : (builder) => {
        builder.addCase(SetData.fulfilled , (state , action) => {
            state.Success = action.payload.Success;
        })
    }
})