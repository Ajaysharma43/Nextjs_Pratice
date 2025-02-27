import axios from "axios"

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")
export const SaveData = createAsyncThunk('SaveData', async ({ Data }) => {
    const Response = await axios.post('/pages/api/data', { Data })
    console.log(Response.data);

    return Response.data
})

export const Getdata = createAsyncThunk('GetData', async () => {
    const response = await axios.get('/pages/api/data');
    console.log(response.data);

    return response.data;
})

export const DeleteData = createAsyncThunk('DeleteData', async ({ id }) => {
    console.log(id  , " is the id");
    const Response = await axios.delete('/pages/api/data', { data : {id : id} })
    return Response.data;
})

export const UpdateData = createAsyncThunk('Update', async ({ formData }) => {
    const Response = await axios.put('/pages/api/data', { data: formData });
    return Response.data;
})

const initialState = {
    count: 0,
    Data: []
}

const reducer = createSlice({
    name: "DataReducer",
    initialState,
    reducers: {
        increament: (state, action) => {
            state.count += 1
        }
    },
    extraReducers: (builder) => {
        builder.addCase(UpdateData.fulfilled, (state, action) => {
            state.Data = action.payload.Data
        })
        builder.addCase(DeleteData.fulfilled, (state, action) => {
            state.Data = action.payload.Data
        })
        builder.addCase(Getdata.fulfilled, (state, action) => {
            state.Data = action.payload.data
        })
        builder.addCase(SaveData.fulfilled, (state, action) => {
            state.Data = action.payload.Data
        })
    }
})

export const { increament } = reducer.actions
export default reducer.reducer