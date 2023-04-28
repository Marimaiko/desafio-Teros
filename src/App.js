import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [participants, setParticipants] = useState([])

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios.get('/api/participants')
        .then(response => {
          setParticipants(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }, 60 * 60 * 1000) 

    axios.get('/api/participants')
      .then(response => {
        setParticipants(response.data)
      })
      .catch(error => {
        console.log(error)
      })

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>
      <h1>Open Banking Participants</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Logo</th>
            <th>Authorization Server URL</th>
          </tr>
        </thead>
        <tbody>
          {participants.map(participant => (
            <tr key={participant.id}>
              <td>{participant.participant.participantName}</td>
              <td><img src={participant.participantLogo} alt={participant.participantName} width={100} height={100} /></td>
              <td><a href={participant.participantConfigurationUrl}>{participant.participantConfigurationUrl}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App