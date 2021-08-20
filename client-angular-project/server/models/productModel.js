var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number,
    image: String,
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model
    ('Product', productSchema);