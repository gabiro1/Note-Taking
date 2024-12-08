// src/components/NoteList.js
import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, deleteNote, setSelectedNote }) => {
    return (
        <div>
            <h2>Your Notes</h2>
            <ul>
                {notes.map(note => (
                    <NoteItem 
                        key={note.id} 
                        note={note} 
                        deleteNote={deleteNote} 
                        setSelectedNote={setSelectedNote} 
                    />
                ))}
            </ul>
        </div>
    );
};

export default NoteList;