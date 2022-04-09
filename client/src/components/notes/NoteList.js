import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NoteConsumer } from "../../providers/NoteProvider";
import { Row, Col, Modal, Button } from 'react-bootstrap';
import NoteShow from './NoteShow'


const NoteList = ({ notes, getAllNotes, deleteNote }) => {
  const { serviceId } = useParams()
  // const [show, setShow] = useState(false);

  useEffect( () => {
    getAllNotes(serviceId)
  }, [])

  return (
    <>
      { notes.map( a => 
        <NoteShow 
        key={a.id}
        {...a}
      />
      )}
    </>
  )
}

const ConnectedNoteList = (props) => (
  <NoteConsumer>
    { value => <NoteList {...props} {...value} />}
  </NoteConsumer>
)

export default ConnectedNoteList;