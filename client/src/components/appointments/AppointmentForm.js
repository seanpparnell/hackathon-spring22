import { useEffect, useState } from 'react';
import { Form, Button, Card} from 'react-bootstrap';
import { AppointmentConsumer } from '../../providers/AppointmentProvider';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const AppointmentForm = ({ addAppointment, setAdd, updateAppointment, setEdit, setShow, appt_location, appt_date, appt_time, id}) => {
  const [appointment, setAppointment] = useState({ appt_location: '', appt_date: '', appt_time: ''})

  // const location = useLocation()
  // const { id, appt_location, appt_date, appt_time } = location.state
  // const { userId } = useParams()

 
  useEffect( () => {
    if (id) {
      setAppointment({appt_location, appt_date, appt_time})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateAppointment(id, appointment)
      setEdit(false)
      
    } else {
      addAppointment(appointment)
      // setAdd(false)
    }
    setAppointment({ appt_location: '', appt_date: '', appt_time: ''})
  }

  return (
    <>
      
      {/* <h1>Add Adoption</h1> */}
      <Card style={{ width: '25rem', backgroundColor:'pink', padding:'5px'} }>
        <h1>{ id ? 'Update' : 'Create' } Appt</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control
              name='location'
              value={appointment.appt_location}
              onChange={(e) => setAppointment({ ...appointment, appt_location: e.target.value })}
              type="text"
              placeholder="location"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name='appt_date'
              value={appointment.appt_date}
              onChange={(e) => setAppointment({...appointment, appt_date: e.target.value})}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="time"
              name='appt_time'
              value={appointment.appt_time}
              onChange={(e) => setAppointment({...appointment, appt_time: e.target.value})}
              required
            />
          </Form.Group>
        
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </>
  )
}

const ConnectedAppointmentForm = (props) => (
  <AppointmentConsumer>
    { value => <AppointmentForm {...props} {...value} /> }
  </AppointmentConsumer>
)

export default ConnectedAppointmentForm;