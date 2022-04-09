import { useState } from "react";
import NoteForm from "./NoteForm";
import { NoteConsumer } from "../../providers/NoteProvider";
import { useParams } from 'react-router-dom';


import { Link } from 'react-router-dom';


const NoteShow = ({ id, subject, body, updateNote, deleteNote }) => {
  const [editing, setEdit] = useState(false)

  const { serviceId } = useParams()
  return (
    <>
      <h2>Subject: {subject}</h2>
      <h4>body:{body}</h4>
      
      {
        editing ?
        <>
          <NoteForm
            id={id}
            setEdit={setEdit}
            updateNote={updateNote}
            subject={subject}
            body={body}
            
          />
          <button onClick={ () => setEdit(false)}>Cancel</button>
        </>
        :
        <>
        
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={() => deleteNote(serviceId, id)}>Delete</button>
          
          {/* <Link
            to={`/services/${id}/services`}
            state={{ serviceId: id}}
          >
            Services
          </Link> */}
        </>
      }
    </>
  )
}

const ConnectedNoteShow = (props) => (
  <NoteConsumer>
    { value => <NoteShow {...value} {...props} /> }
  </NoteConsumer>
)

export default ConnectedNoteShow;