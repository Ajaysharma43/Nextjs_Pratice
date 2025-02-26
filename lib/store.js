import reducer from "./Slices/Data/Dataslice";

const { configureStore } = require("@reduxjs/toolkit");

const Store = configureStore({
    reducer: {
        Data : reducer
    }
})

export default Store;