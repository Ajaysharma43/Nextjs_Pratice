import axios from "axios"

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")
export const SaveData = createAsyncThunk('SaveData' , async({Data}) => {
   const Response = await axios.post('/api/data',{Data})
   console.log(Response.data);
   
   return Response.data
})

export const Getdata = createAsyncThunk('GetData',async()=> {
    const response = await axios.get('/api/data');
    console.log(response.data);
    
    return response.data;
})

export const DeleteData = createAsyncThunk('DeleteData' , async({id}) => {
    const Response = await axios.delete('api/data' , {data : {id}})
    return Response.data;
})

const initialState = {
    count: 0,
    Data : []
}

const reducer = createSlice({
    name: "DataReducer",
    initialState,
    reducers: {
        increament: (state, action) => {
            state.count += 1
        }
    },
    extraReducers : (builder) => {
        builder.addCase(DeleteData.fulfilled , (state , action) => {
            state.Data = action.payload.Data
        })
        builder.addCase(Getdata.fulfilled , (state , action) => {
            state.Data = action.payload.data
        })
        builder.addCase(SaveData.fulfilled , (state , action) => {
            state.Data = action.payload.Data
        })
    }
})

export const { increament } = reducer.actions
export default reducer.reducer