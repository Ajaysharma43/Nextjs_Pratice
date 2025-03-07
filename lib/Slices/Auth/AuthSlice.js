import axios from "axios"

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

export const SetData = createAsyncThunk('SetData', async ({ formData }) => {
    const Response = await axios.post('/api/Auth', { type: "Signup", Data: formData })
    return Response.data
})

export const Login = createAsyncThunk('Login', async ({ FormData }) => {
    const Response = await axios.post('/api/Auth', { type: "Login", Data: FormData })
    console.log(Response.data);
    return Response.data
})

const initialState = {
    Data: [],
    Success: false,
    Message: ""
}

const AuthReducer = createSlice({
    initialState,
    name: "AuthReducer",
    extraReducers: (builder) => {
        builder.addCase(SetData.pending, (state, action) => {
            state.Success = false
        }),
            builder.addCase(SetData.fulfilled, (state, action) => {
                state.Success = action.payload.Success;
            }),

            builder.addCase(Login.pending, (state, action) => {
                state.Success = false
            }),
            builder.addCase(Login.fulfilled, (state, action) => {
                state.Success = action.payload.Success;
                state.Message = action.payload.Message
            }),
            builder.addCase(Login.rejected, (state, action) => {
                state.Message = action.payload.Message
            })
    }
})

export default AuthReducer.reducer