import { useState } from 'react';
import ServiceList from './ServiceList';
import ServiceForm from './ServiceForm';



const Services = () => {
  // const [adding, setAdd] = useState(false)

  return(
    <>
     {/* <Button onClick={() => setAdd(true)}>
        +
      </Button> */}

      <ServiceForm 
        
      />
      <h1>Your Current Services</h1>
      
      <ServiceList />
    </>
  )
}

export default Services;