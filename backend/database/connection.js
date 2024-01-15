const mongoose = require('mongoose');
const URL = 'mongodb+srv://emgauravrana:Gaurav2001@cluster0.3sb5xqk.mongodb.net/currentNews'

const connection = mongoose.connect(URL).then(()=>{
  console.log('Database connection established')
})



module.exports = connection;