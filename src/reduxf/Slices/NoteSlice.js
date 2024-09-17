import { createSlice } from "@reduxjs/toolkit";

const notesSlice=createSlice({
    name:'notesSlice',
    initialState:{
        notes:[]
    },
    reducers:{
        createNote:(state,action)=>{
            state.notes.push(action.payload)
        },
        delteNote:(state,action)=>{
        state.notes =state.notes.filter(note=>note.id !== action.payload)

        }
    }
})
export default notesSlice.reducer;
export const {createNote,delteNote}= notesSlice.actions;
