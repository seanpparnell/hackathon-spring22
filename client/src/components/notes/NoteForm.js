import { useEffect, useState } from 'react';
import { Form, Button, Card} from 'react-bootstrap';
import { NoteConsumer } from '../../providers/NoteProvider';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const NoteForm = ({ addNote, setAdd, updateNote, setEdit, setShow, subject, body, id}) => {
  const [note, setNote] = useState({ subject: '', body: ''})

  // const location = useLocation()
  // const { id, stype, cost, perks } = location.state
  const { serviceId } = useParams()


 
  useEffect( () => {
    if (id) {
      setNote({subject, body})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateNote( serviceId, id, note )

      setEdit(false)
      
    } else {
      addNote( serviceId, note )
      // setAdd(false)
    }
    setNote({ subject: '', body: ''})
  }

  return (
    <>
      
      {/* <h1>Add Adoption</h1> */}
      <h1>{ id ? 'Update' : 'Create' } Note</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Subject</Form.Label>
          <Form.Control 
            name='subject'
            value={note.subject}
            onChange={(e) => setNote({ ...note, subject: e.target.value })}
            type="text" 
            placeholder="subject" 
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Body</Form.Label>
          <Form.Control 
            type="textarea"
            name='body'
            value={note.body}
            onChange={(e) => setNote({...note, body: e.target.value})}
            required
          />
          </Form.Group>
        
     
      
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedNoteForm = (props) => (
  <NoteConsumer>
    { value => <NoteForm {...props} {...value} /> }
  </NoteConsumer>
)

export default ConnectedNoteForm;