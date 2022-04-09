import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthConsumer } from './AuthProvider';

export const AppointmentContext = React.createContext();

export const AppointmentConsumer = AppointmentContext.Consumer;

const AppointmentProvider = ({ children, user }) => {
  const [appointments, setAppointments] = useState([])
  

  const navigate = useNavigate()

  const getAllAppointments = () => {
    axios.get(`/api/users/${user.id}/appointments`)
      .then( res => setAppointments(res.data) )
      .catch( err => console.log(err))
  }

  const addAppointment = (appointment) => {
    axios.post(`/api/users/${user.id}/appointments`, { appointment })
      .then( res => setAppointments([...appointments, res.data]) )
      .catch( err => console.log(err))
  }

  const updateAppointment= (id, appointment) => {
    axios.put(`/api/users/${user.id}/appointments/${id}`, { appointment })
      .then( res => {
        const newUpdatedAppointments = appointments.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setAppointments(newUpdatedAppointments)
        navigate('/appointments')
      })
      .catch( err => console.log(err))
  }

  const deleteAppointment= (id) => {
    axios.delete(`/api/users/${user.id}/appointments/${id}`)
      .then( res => {
        setAppointments(appointments.filter( c => c.id !== id))
        navigate('/appointments')
      })
      .catch( err => console.log(err))
  }



  return (
    <AppointmentContext.Provider value={{
    
      appointments,
      getAllAppointments,
      addAppointment,
      updateAppointment,
      deleteAppointment,
    }}>
      { children }
    </AppointmentContext.Provider>
  )
}

const ConnectedAppointmentProvider = (props) => (
  <AuthConsumer>
    { value => <AppointmentProvider {...value} {...props} /> }
  </AuthConsumer>
)

export default ConnectedAppointmentProvider;