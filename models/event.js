const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true }, // Works for Concert Title OR Venue Name
    artist: String,                          // For concerts
    location: String,                        // For concerts (City for venues)
    date: String,                            // For concerts
    price: String,                           // For concerts
    priceClass: String,                      // For styling (red/blue)
    image: String,                           // For both
    shows: Number,                           // Specific for Venues
    category: { 
        type: String, 
        enum: ['concert', 'venue', 'comedy', 'festival','artist'], 
        required: true 
    }
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;