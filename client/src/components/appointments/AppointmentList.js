// import { Container, Row, Col } from 'react-bootstrap';
import AppointmentShow from './AppointmentShow';
import { AppointmentConsumer } from '../../providers/AppointmentProvider';
import { useEffect, useState } from 'react';
import { Modal, Button, Container, Row, Card, Col } from 'react-bootstrap';
// import AppointmentForm from './AppointmentForm';


const AppointmentList = ({ appointments, setAppointments, getAllAppointments, deleteAppointments, id, appt_location, appt_date, appt_time }) => {

  // const [show, setShow] = useState(false);
  // const [editing, setEdit] = useState(false);
  
  useEffect( () => {
    getAllAppointments()
  }, [])



  return ( 
    <>
           <Container>
             <Row>
               { appointments.map( a =>
                <Col>
                  <Card style={{ width: '14rem', backgroundColor: '#64FCD9', margin:'10px', padding:'10px'}}>
                    <AppointmentShow
                      key={a.id}
                      {...a}
                    />
                  </Card>
                </Col>
               )}
             </Row>
           </Container>
    </>
  )}
  

const ConnectedAppointmentList = (props) => (
  <AppointmentConsumer>
    { value => <AppointmentList {...value} {...props} /> }
  </AppointmentConsumer>
)

export default ConnectedAppointmentList;