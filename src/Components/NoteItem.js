// src/components/NoteItem.js
import React from 'react';

const NoteItem = ({ note, deleteNote, setSelectedNote }) => {
    return (
        <li>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <p className="timestamp">{new Date(note.timestamp).toLocaleString()}</p> {/* Display timestamp */}
            <div className="note-actions">
                <button className="edit" onClick={() => setSelectedNote(note)}>Edit</button>
                <button className="delete" onClick={() => deleteNote(note.id)}>Delete</button>
            </div>
        </li>
    );
};

export default NoteItem;