import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delteNote } from '../../reduxf/Slices/NoteSlice';

function ListNote() {
    const notes=useSelector((state)=>state.notesReducer.notes);
    const dispatch=useDispatch();

    return (
        <div>
            {notes.map(note=>{
                return <div>
                    <p>{note.id}</p>
                    <h2>{note.title}</h2>
                    <p>{note.desc}</p>
                    <button onClick={()=>dispatch(delteNote(note.id))}>Button</button>
                </div>
            })}
        </div>
    )
}

export default ListNote
