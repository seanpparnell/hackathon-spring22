import { Container, Row, Col } from 'react-bootstrap';
import ServiceShow from './ServiceShow';
import { ServiceConsumer } from '../../providers/ServiceProvider';
import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
// import ServiceForm from './ServiceForm';
import { useParams } from 'react-router-dom';

const ServiceList = ({ services, setServices, getAllServices, deleteServices }) => {

  // const [show, setShow] = useState(false);
  // const [editing, setEdit] = useState(false);
  const { appointmentId } = useParams()

  useEffect( () => {
    getAllServices(appointmentId)
  }, [])



  return ( 
    <>
           { services.map( a => 
            <ServiceShow 
              key={a.id}
              {...a}
            />
           )}
    </>
  )}
  

const ConnectedServiceList = (props) => (
  <ServiceConsumer>
    { value => <ServiceList {...value} {...props} /> }
  </ServiceConsumer>
)

export default ConnectedServiceList;