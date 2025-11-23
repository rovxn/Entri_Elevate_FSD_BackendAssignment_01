const mongoose = require('mongoose');

// Define the Item Schema with the required fields
const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 0 // Quantity cannot be negative
    },
    price: {
        type: Number,
        required: true,
        min: 0 // Price cannot be negative
    }
});

// Create the Item Model
const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;