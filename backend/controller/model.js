const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  participantName: String,
  participantLogo: String,
  configurationUrl: String
});

const Participant = mongoose.model('Participant', participantSchema);

module.exports = Participant;