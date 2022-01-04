const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const linkDataSchema = new Schema({
        _id: Number,
        linkUrl: String,
        linkText: String
});

module.exports = mongoose.model('LinkData', linkDataSchema);