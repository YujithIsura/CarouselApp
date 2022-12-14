const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slidesSchema = new Schema({
    slides: {
        type: Number,
        required: true
    },
    infinite: {
        type: Boolean,
        required: true
    }
}, { timestamps: true});

const Slide = mongoose.model('Slide', slidesSchema);

module.exports = Slide;