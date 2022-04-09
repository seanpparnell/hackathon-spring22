import { useState } from 'react';
import AppointmentList from './AppointmentList';
import AppointmentForm from './AppointmentForm';
import { Button, Modal } from 'react-bootstrap';


const Appointments = ({}) => {
  // const [adding, setAdd] = useState(false)

  return(
    <>
     {/* <Button onClick={() => setAdd(true)}>
        +
      </Button> */}

      <AppointmentForm 
        
      />
      <h1>Your Current Appointments</h1>
      
      <AppointmentList />
    </>
  )
}

export default Appointments;