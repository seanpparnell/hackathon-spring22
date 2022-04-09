import { useEffect, useState } from 'react';
import { Form, Button, Card} from 'react-bootstrap';
import { ServiceConsumer } from '../../providers/ServiceProvider';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ServiceForm = ({ addService, setAdd, updateService, setEdit, setShow, stype, cost, perks, id}) => {
  const [service, setService] = useState({ stype: '', cost: '', perks: ''})

  // const location = useLocation()
  // const { id, stype, cost, perks } = location.state
  const { appointmentId } = useParams()


 
  useEffect( () => {
    if (id) {
      setService({stype, cost, perks})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateService( appointmentId, id, service )

      setEdit(false)
      
    } else {
      addService( appointmentId, service )
      // setAdd(false)
    }
    setService({ stype: '', cost: '', perks: ''})
  }

  return (
    <>
      
      {/* <h1>Add Adoption</h1> */}
      <h1>{ id ? 'Update' : 'Create' } Service</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Type</Form.Label>
          <Form.Control 
            name='stype'
            value={service.stype}
            onChange={(e) => setService({ ...service, stype: e.target.value })}
            type="text" 
            placeholder="type" 
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Cost</Form.Label>
          <Form.Control 
            type="text"
            name='cost'
            value={service.cost}
            onChange={(e) => setService({...service, cost: e.target.value})}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Perks</Form.Label>
          <Form.Control 
            type="text"
            name='perks'
            value={service.perks}
            onChange={(e) => setService({...service, perks: e.target.value})}
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

const ConnectedServiceForm = (props) => (
  <ServiceConsumer>
    { value => <ServiceForm {...props} {...value} /> }
  </ServiceConsumer>
)

export default ConnectedServiceForm;