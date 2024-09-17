import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./Slices/MessegeSlice";
import NoteSlice from "./Slices/NoteSlice";
import productReducer from "./Slices/ProductSlice";
import cartReducer from "./Slices/cartSlice";

export default configureStore({
    reducer:{
        // messageReducer,
        // notesReducer:NoteSlice
        productReducer,
        cartReducer


    }
})