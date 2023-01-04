import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

import Note from "./Note";
import { catnotes } from "../../../declarations/catnotes";

import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      catnotes.newNote(newNote.title, newNote.content)
      return [...prevNotes, newNote];
    });
  }

//  to render array of notes from backend 
 useEffect(() => { fetchData}, [])

//  motoko array async
async function fetchData(){
    const allNotes = await catnotes.getNotes()
    console.log(allNotes)
    setNotes(allNotes)
}


  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }


  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
