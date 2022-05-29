const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let User = new Schema({
   userName: {
      type: String
   },
   phoneNumber: {
    type: Number
    },
   email: {
      type: String
   },
   cardNumber: {
      type: String
   },
   file: {
      type: String
   }
}, {
   collection: 'users'
})

module.exports = mongoose.model('User', User)