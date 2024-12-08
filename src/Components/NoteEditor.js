import React, { useState, useEffect } from 'react';

const NoteEditor = ({ addNote, editNote, selectedNote }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (selectedNote) {
            setTitle(selectedNote.title || ''); // Ensure title is always a string
            setContent(selectedNote.content || ''); // Ensure content is always a string
        } else {
            setTitle('');
            setContent('');
        }
    }, [selectedNote]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedNote) {
            editNote({ ...selectedNote, title, content });
        } else {
            const newNote = {
                id: Date.now(),
                title,
                content,
            };
            addNote(newNote);
        }
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required 
            />
            <textarea 
                placeholder="Content" 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
                required 
            />
            <button type="submit">{selectedNote ? 'Edit Note' : 'Add Note'}</button>
        </form>
    );
};

export default NoteEditor;