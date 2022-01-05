const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    loginId: {
        type: String,
    },
    password: String
})

module.exports = mongoose.model('User', UserSchema);