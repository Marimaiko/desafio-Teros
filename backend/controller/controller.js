const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://MarianaMaiko:7DSDQp0fPwOe4gtq@openbankingteros.jtzm9fq.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected!');
}).catch((err) => {
  console.log(err);
});

const participantSchema = new mongoose.Schema({
  participantName: String,
  logo: String,
  configurationUrl: String
});

const Participant = mongoose.model('Participant', participantSchema);

module.exports = {Participant}