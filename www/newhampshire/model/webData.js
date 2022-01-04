const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const webDataSchema = new Schema({
        _id: Number,
        imageLocation: String,
        imageAltText: String,
        linkUrl: String,
        text: String
});

module.exports = mongoose.model('WebData', webDataSchema);