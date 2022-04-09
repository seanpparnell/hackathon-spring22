import NoteList from './NoteList';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import NoteForm from './NoteForm';

const Notes = () => {
  // const [adding, setAdd] = useState(false);

  return(
    <>
      <NoteForm 
        
        />
        <h1>Your Current Notes</h1>
        
        <NoteList />
    </>
  )
}

export default Notes;