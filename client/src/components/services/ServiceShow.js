import { useState } from "react";
import ServiceForm from "./ServiceForm";
import { ServiceConsumer } from "../../providers/ServiceProvider";
import { useParams } from 'react-router-dom';


import { Link } from 'react-router-dom';


const ServiceShow = ({ id, stype, cost, perks, updateService, deleteService }) => {
  const [editing, setEdit] = useState(false)

  const { appointmentId } = useParams()
  return (
    <>
      <h2>Type: {stype}</h2>
      <h4>Cost:{cost}</h4>
      <h4>Perks: {perks}</h4>
      {
        editing ?
        <>
          <ServiceForm
            id={id}
            setEdit={setEdit}
            updateService={updateService}
            stype={stype}
            cost={cost}
            perks={perks}
          />
          <button onClick={ () => setEdit(false)}>Cancel</button>
        </>
        :
        <>
        
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={() => deleteService(appointmentId, id)}>Delete</button>
          
          <Link
            to={`/services/${id}/notes`}
            state={{ noteId: id}}
          >
            Notes
          </Link>
        </>
      }
    </>
  )
}

const ConnectedServiceShow = (props) => (
  <ServiceConsumer>
    { value => <ServiceShow {...value} {...props} /> }
  </ServiceConsumer>
)

export default ConnectedServiceShow;