
const mongoose = require('mongoose');

const comicSchema = new mongoose.Schema({
    name: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    pages: { type: Number },
    condition: { type: String, enum: ['new', 'used'], default: 'new' },
    description: { type: String, default: '' },
}, { timestamps: true });

module.exports = mongoose.model('Comic', comicSchema);
