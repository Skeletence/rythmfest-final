const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true }, 
    artist: String,                          
    location: String,                       
    date: String,                            
    price: String,                           
    priceClass: String,                      
    image: String,                           
    shows: Number,                           
    category: { 
        type: String, 
        enum: ['concert', 'venue', 'comedy', 'festival','artist'], 
        required: true 
    }
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;