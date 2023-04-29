import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import { Header } from './components/header';
import { Card } from './components/card';
import { Footer } from './components/footer';

function Participants() {
  const [participants, setParticipants] = useState([])

  useEffect(() => {
    const getParticipants = async () => {
      try {
        const result = await axios.get('http://localhost:3000/api/participants')
        console.log(result.data)
        setParticipants(result.data);
      } catch (error) {
        console.log(error);
      }
      console.log('requisicao done')
    }; 
    getParticipants();
  }, [])

  return (
    <div class="page-container">
      <Header/>
      <main>
        {participants.map(participant => (
          <Card
            logo= {participant.participantLogo}
            title= {participant.participantName}
            url= {participant.configurationUrl}
          />
        ))}
        <Card/>
        <Card/>
      </main>
      <Footer/>
    </div>
  )
}

export default Participants