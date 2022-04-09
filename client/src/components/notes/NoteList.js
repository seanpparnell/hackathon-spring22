import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NoteConsumer } from "../../providers/NoteProvider";
import { Row, Col, Modal, Button, Card, Container } from 'react-bootstrap';
import NoteShow from './NoteShow'


const NoteList = ({ notes, getAllNotes, deleteNote }) => {
  const { serviceId } = useParams()
  // const [show, setShow] = useState(false);

  useEffect( () => {
    getAllNotes(serviceId)
  }, [])

  return (
    <>
      <Container>
        <Row>
          { notes.map( a =>
            <Col>
              <Card style={{ width: '14rem', backgroundColor: '#64FCD9', margin:'10px', padding:'10px'}}>
                <NoteShow
                key={a.id}
                {...a}
                          />
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    </>
  )
}

const ConnectedNoteList = (props) => (
  <NoteConsumer>
    { value => <NoteList {...props} {...value} />}
  </NoteConsumer>
)

export default ConnectedNoteList;