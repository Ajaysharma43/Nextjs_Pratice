import reducer from "./Slices/Data/Dataslice";
import AuthReducer from './Slices/Auth/AuthSlice'

const { configureStore } = require("@reduxjs/toolkit");

const Store = configureStore({
    reducer: {
        Data : reducer,
        Auth : AuthReducer
    }
})

export default Store;