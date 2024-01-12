const mongoose = require('mongoose');
const URL = 'Please enter your mongoose connection'

const connection = mongoose.connect(URL).then(()=>{
  console.log('Database connection established')
})



module.exports = connection;