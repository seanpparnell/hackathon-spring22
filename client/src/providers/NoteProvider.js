import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const NoteContext = React.createContext();

export const NoteConsumer = NoteContext.Consumer;

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([])

  const navigate = useNavigate()

  const getAllNotes = (serviceId) => {
    axios.get(`/api/services/${serviceId}/notes`)
      .then( res => setNotes(res.data) )
      .catch( err => console.log(err) )
  }

  const addNote = (serviceId, note) => {
    axios.post(`/api/services/${serviceId}/notes`, { note })
    .then( res => setNotes([...notes, res.data]) )
    .catch( err => console.log(err) )
  }

  const updateNote = (serviceId, id, note) => {
    axios.put(`/api/services/${serviceId}/notes/${id}`, { note })
      .then( res => {
        const newUpdatedNotes = notes.map( n => {
          if (n.id === id) {
            return res.data
          }
          return n
        })
        setNotes(newUpdatedNotes)
        navigate(`/services/${serviceId}/notes`)
      })
      .catch( err => console.log(err) )
  }

  const deleteNote = (serviceId, id) => {
    axios.delete(`/api/services/${serviceId}/notes/${id}`)
      .then( res => {
        setNotes(notes.filter(n => n.id !== id))
      })
      .catch( err => console.log(err) )
  }

  return (
    <NoteContext.Provider value={{
      notes,
      getAllNotes, 
      addNote,
      updateNote,
      deleteNote,
    }}>
      { children }
    </NoteContext.Provider>
  )
}

export default NoteProvider;