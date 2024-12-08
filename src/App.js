// src/App.js
import React, { useState, useEffect } from 'react';
import NoteEditor from './Components/NoteEditor';
import NoteList from './Components/NoteList';
import './App.css';

const App = () => {
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState(null);

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        setNotes(savedNotes);
    }, []);

    const addNote = (note) => {
      const newNote = {
          ...note,
          timestamp: new Date().toISOString(), // Add timestamp
      };
      const updatedNotes = [...notes, newNote];
      setNotes(updatedNotes);
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

    const deleteNote = (id) => {
        const updatedNotes = notes.filter(note => note.id !== id);
        setNotes(updatedNotes);
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
    };

    const editNote = (updatedNote) => {
        const updatedNotes = notes.map(note => 
            note.id === updatedNote.id ? updatedNote : note
        );
        setNotes(updatedNotes);
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
        setSelectedNote(null); // Clear selected note after editing
    };

    return (
        <div className="app-container">
            <h1>Note Taking App</h1>
            <NoteEditor addNote={addNote} editNote={editNote} selectedNote={selectedNote} />
            <NoteList notes={notes} deleteNote={deleteNote} setSelectedNote={setSelectedNote} />
        </div>
    );
};

export default App;