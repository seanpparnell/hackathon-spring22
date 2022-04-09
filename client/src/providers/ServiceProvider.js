import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const ServiceContext = React.createContext();

export const ServiceConsumer = ServiceContext.Consumer;

const ServiceProvider = ({ children }) => {
  const [services, setServices] = useState([])

  const navigate = useNavigate()

  const getAllServices = (appointmentId) => {
    axios.get(`/api/appointments/${appointmentId}/services`)
      .then( res => setServices(res.data) )
      .catch( err => console.log(err) )
  }

  const addService = (appointmentId, service) => {
    axios.post(`/api/appointments/${appointmentId}/services`, { service })
    .then( res => setServices([...services, res.data]) )
    .catch( err => console.log(err) )
  }

  const updateService = (appointmentId, id, service) => {
    axios.put(`/api/appointments/${appointmentId}/services/${id}`, { service })
      .then( res => {
        const newUpdatedServices = services.map( n => {
          if (n.id === id) {
            return res.data
          }
          return n
        })
        setServices(newUpdatedServices)
        navigate(`/appointments/${appointmentId}/services`)
      })
      .catch( err => console.log(err) )
  }

  const deleteService = (appointmentId, id) => {
    axios.delete(`/api/appointments/${appointmentId}/services/${id}`)
      .then( res => {
        setServices(services.filter(n => n.id !== id))
      })
      .catch( err => console.log(err) )
  }

  return (
    <ServiceContext.Provider value={{
      services,
      getAllServices, 
      addService,
      updateService,
      deleteService,
    }}>
      { children }
    </ServiceContext.Provider>
  )
}

export default ServiceProvider;