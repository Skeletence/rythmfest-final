const mongoose = require('mongoose');
const Event = require('./models/event');

// 1. Connect to MongoDB
mongoose.connect('mongodb+srv://varun_nair:skel1234@projectdb.ambwga7.mongodb.net/?appName=projectDB')
    .then(() => console.log('Connected to MongoDB for Seeding'))
    .catch(err => console.log(err));

// 2. Your Data 
const concerts = [
    {
        title: "Arijit Singh Live",
        artist: "Arijit Singh",
        location: "Palace Grounds, Bengaluru",
        date: "Nov 30, 2025 - 7:00 PM",
        price: "₹4999",
        priceClass: "price-red",
        image: "/images/arijitsingh.jpg", // Note: added leading slash
        category: "concert"
    },
    {
        title: "Prateek Kuhad - Silhouettes Tour",
        artist: "Prateek Kuhad",
        location: "Gachibowli Indoor Stadium, Hyderabad",
        date: "Dec 12, 2025 - 8:30 PM",
        price: "₹2499",
        priceClass: "price-blue",
        image: "/images/prateekkuhad.jpg",
        category: "concert"
    },
    {
        title: "Shreya Ghoshal - Musical Night",
        artist: "Shreya Ghoshal",
        location: "Shanmukhananda Hall, Mumbai",
        date: "Jan 25, 2026 - 7:30 PM",
        price: "₹3999",
        priceClass: "price-red",
        image: "/images/shreyaghoshal.jpeg",
        category: "concert"
    }
];

const venues = [
    {
        title: "Jawaharlal Nehru Stadium", // Mapped 'name' to 'title'
        location: "Delhi",                 // Mapped 'city' to 'location'
        shows: 34,
        image: "/images/jnlstadium.jpeg",
        category: "venue"
    },
    {
        title: "MMRDA Grounds, BKC",
        location: "Mumbai",
        shows: 28,
        image: "/images/mmrda.jpg",
        category: "venue"
    },
    {
        title: "Palace Grounds",
        location: "Bengaluru",
        shows: 41,
        image: "/images/palacegrounds.avif",
        category: "venue"
    },
    {
        title: "Gachibowli Indoor Stadium",
        location: "Hyderabad",
        shows: 22,
        image: "/images/indoorstadium.JPG",
        category: "venue"
    }
];

// 3. Insert Data
const seedDB = async () => {
    await Event.deleteMany({}); // Clear existing data first
    await Event.insertMany(concerts);
    await Event.insertMany(venues);
    console.log("Data Seeded Successfully!");
    mongoose.connection.close();
};

seedDB();