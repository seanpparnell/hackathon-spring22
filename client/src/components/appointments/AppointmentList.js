import { Container, Row, Col } from 'react-bootstrap';
import AppointmentShow from './AppointmentShow';
import { AppointmentConsumer } from '../../providers/AppointmentProvider';
import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
// import AppointmentForm from './AppointmentForm';


const AppointmentList = ({ appointments, setAppointments, getAllAppointments, deleteAppointments, id, appt_location, appt_date, appt_time }) => {

  // const [show, setShow] = useState(false);
  // const [editing, setEdit] = useState(false);
  
  useEffect( () => {
    getAllAppointments()
  }, [])



  return ( 
    <>
           { appointments.map( a => 
            <AppointmentShow 
              key={a.id}
              {...a}
            />
           )}
    </>
  )}
  

const ConnectedAppointmentList = (props) => (
  <AppointmentConsumer>
    { value => <AppointmentList {...value} {...props} /> }
  </AppointmentConsumer>
)

export default ConnectedAppointmentList;