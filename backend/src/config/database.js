const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.Error.messages.general.required = "The attribute '{PATH}' is required."

module.exports = mongoose.connect('mongodb://localhost/mymoney')