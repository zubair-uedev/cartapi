import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createNote } from '../../reduxf/Slices/NoteSlice';
import { nanoid } from '@reduxjs/toolkit';

function CreateNote() {
    const [title, setTitle] = useState('');
    const [desc , setdesc] = useState('');
    const dispatch=useDispatch()
    function handlebtn(e){
        e.preventDefault();
        dispatch(createNote({
            title,
            desc,
            id:nanoid(18)
        }))
    }
    return (
        <div>
            <form action="" onClick={handlebtn}>
                <input placeholder='Title here' type="text" onChange={(e)=>setTitle(e.target.value)} />
                <input placeholder='Description here' type="text" onChange={(e)=>setdesc(e.target.value)}  />
                <input type="submit"  onClick={handlebtn}/>
            </form>
        </div>
    )
}

export default CreateNote
