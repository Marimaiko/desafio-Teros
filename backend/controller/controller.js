const mongoose = require('mongoose');
const express = require('express');
const router = require('../routes');
const app = express();

app.use('/api', router)

mongoose.connect('mongodb+srv://MarianaMaiko:7DSDQp0fPwOe4gtq@openbankingteros.jtzm9fq.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected!');
}).catch((err) => {
  console.log(err);
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})