const mongoose = require('mongoose')

const boothSchema = new mongoose.Schema( {

vid: String,
caption: String



})


const Booth = mongoose.model('Booth', boothSchema)

module.exports = Booth
