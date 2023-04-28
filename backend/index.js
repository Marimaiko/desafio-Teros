const axios = require('axios');
const {Participant} = require('./controller/controller');

async function updateParticipants() {
  try {
    const response = await axios.get('https://data.directory.openbankingbrasil.org.br/participants')

    const participants = response.data.map(item => ({
      participantName: item.RegisteredName,
      participantLogo: item.AuthorisationServers[0].CustomerFriendlyLogoUri,
      participantConfigurationUrl: item.AuthorisationServers[0].OpenIDDiscoveryDocument
    }))
    console.log(participants)
    await Participant.deleteMany()
    await Participant.insertMany(participants)
  } catch (err) {
    console.log(err)
  }
} 
setInterval(() => {
  updateParticipants()
}, 60 * 1000)

module.exports = {updateParticipants} 

