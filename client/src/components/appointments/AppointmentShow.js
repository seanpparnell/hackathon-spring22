import { useState } from "react";
import AppointmentForm from "./AppointmentForm";
import { AppointmentConsumer } from "../../providers/AppointmentProvider";



import { Link } from 'react-router-dom';


const AppointmentShow = ({ id, appt_location, appt_date, appt_time, updateAppointment, deleteAppointment }) => {
  const [editing, setEdit] = useState(false)


  return (
    <>
      <h2>location: {appt_location}</h2>
      <h4>date:{appt_date}</h4>
      <h4>time: {appt_time}</h4>
      {
        editing ?
        <>
          <AppointmentForm
            id={id}
            setEdit={setEdit}
            updateAppointment={updateAppointment}
            appt_location={appt_location}
            appt_date={appt_date}
            appt_time={appt_time}
          />
          <button onClick={ () => setEdit(false)}>Cancel</button>
        </>
        :
        <>
        
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={() => deleteAppointment(id)}>Delete</button>
          
          {/* <Link 
            to={`/appointments/${id}/shots`}
            state={{ billboardId: id, billboardTitle: title}}
          >
            Shots
          </Link> */}
        </>
      }
    </>
  )
}

const ConnectedAppointmentShow = (props) => (
  <AppointmentConsumer>
    { value => <AppointmentShow {...value} {...props} /> }
  </AppointmentConsumer>
)

export default ConnectedAppointmentShow;