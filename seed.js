const mongoose = require('mongoose');
const Event = require('./models/event');

const dbURI = 'mongodb+srv://varun_nair:skel1234@projectdb.ambwga7.mongodb.net/?appName=projectDB';

mongoose.connect(dbURI)
    .then(() => console.log('Connected to MongoDB for Seeding'))
    .catch(err => console.log(err));

// 1. CONCERTS
const concerts = [
    { title: "Arijit Singh Live", artist: "Arijit Singh", location: "Palace Grounds, Bengaluru", date: "Nov 30, 2025", price: "₹4999", priceClass: "price-red", image: "/images/arijitsingh.jpg", category: "concert" },
    { title: "Prateek Kuhad Tour", artist: "Prateek Kuhad", location: "Indoor Stadium, Hyderabad", date: "Dec 12, 2025", price: "₹2499", priceClass: "price-blue", image: "/images/prateekkuhad.jpg", category: "concert" },
    { title: "Shreya Ghoshal Night", artist: "Shreya Ghoshal", location: "Shanmukhananda Hall, Mumbai", date: "Jan 25, 2026", price: "₹3999", priceClass: "price-red", image: "/images/shreyaghoshal.jpeg", category: "concert" }
];

// 2. VENUES
const venues = [
    { title: "Jawaharlal Nehru Stadium", location: "Delhi", shows: 34, image: "/images/jnlstadium.jpeg", category: "venue" },
    { title: "MMRDA Grounds, BKC", location: "Mumbai", shows: 28, image: "/images/mmrda.jpg", category: "venue" },
    { title: "Palace Grounds", location: "Bengaluru", shows: 41, image: "/images/palacegrounds.avif", category: "venue" },
    { title: "Gachibowli Indoor Stadium", location: "Hyderabad", shows: 22, image: "/images/indoorstadium.JPG", category: "venue" }
];

// 3. FESTIVALS
const festivals = [
    { title: "Electric Dreams Festival", artist: "Arijit Singh, Nucleya", date: "Jan 18, 2026", location: "MMRDA Grounds, Mumbai", price: "From ₹11999", image: "/images/concertfest1.jpeg", category: "festival" },
    { title: "Sunburn Goa 2025", artist: "Martin Garrix, DJ Snake", date: "Dec 28, 2025", location: "Vagator Beach, Goa", price: "From ₹9499", image: "/images/concertfest2.webp", category: "festival" },
    { title: "NH7 Weekender", artist: "Multiple Artists", date: "Dec 05, 2025", location: "Mahalaxmi Lawns, Pune", price: "From ₹4999", image: "/images/concertfest3.jpg", category: "festival" },
    { title: "Ziro Festival", artist: "Indie Artists", date: "Sep 25, 2026", location: "Arunachal Pradesh", price: "From ₹7999", image: "/images/concertfest4.jpeg", category: "festival" }
];

// 4. COMEDY
const comedy = [
    { title: "Anubhav Singh Bassi", artist: "'Kisi Ko Batana Mat'", date: "Coming Soon", location: "India Tour", price: "Get Tickets", image: "/images/anubhav.webp", category: "comedy" },
    { title: "Zakir Khan", artist: "Tathastu Special", date: "Coming Soon", location: "Delhi / Mumbai", price: "Get Tickets", image: "/images/zakir.jpg", category: "comedy" },
    { title: "Kenny Sebastian", artist: "Professor of Tomfoolery", date: "Coming Soon", location: "Bengaluru", price: "Get Tickets", image: "/images/kenny.webp", category: "comedy" },
    { title: "Biswa Kalyan Rath", artist: "Live Stream", date: "Coming Soon", location: "Mumbai", price: "Get Tickets", image: "/images/biswa.webp", category: "comedy" },
    { title: "Abhishek Upmanyu", artist: "Toxic Tour", date: "Coming Soon", location: "Delhi", price: "Get Tickets", image: "/images/abhishek.webp", category: "comedy" },
    { title: "Aakash Gupta", artist: "Excuse Me Brother!", date: "Coming Soon", location: "Mumbai", price: "Get Tickets", image: "/images/aakash.jpeg", category: "comedy" }
];

// 5. ARTISTS
const artists = [
    { title: "Arijit Singh", price: "12 Shows", image: "/images/arijitsingh.jpg", category: "artist" },
    { title: "Nucleya", price: "8 Shows", image: "/images/nucleya.jpg", category: "artist" },
    { title: "Prateek Kuhad", price: "15 Shows", image: "/images/prateekkuhad.jpg", category: "artist" },
    { title: "Ritviz", price: "10 Shows", image: "/images/ritviz.jpg", category: "artist" },
    { title: "Shreya Ghoshal", price: "9 Shows", image: "/images/shreyaghoshal.jpeg", category: "artist" },
    { title: "Anuv Jain", price: "18 Shows", image: "/images/anuvjain.webp", category: "artist" },
    { title: "Divine", price: "7 Shows", image: "/images/divine.jpeg", category: "artist" },
    { title: "Sunidhi Chauhan", price: "5 Shows", image: "/images/sunidhichauhan.jpg", category: "artist" },
    { title: "Indian Ocean", price: "11 Shows", image: "/images/indianocean.jpg", category: "artist" }
];

const seedDB = async () => {
    await Event.deleteMany({});
    await Event.insertMany(concerts);
    await Event.insertMany(venues);
    await Event.insertMany(festivals);
    await Event.insertMany(comedy);
    await Event.insertMany(artists); 
    console.log("Data Seeded Successfully!");
    mongoose.connection.close();
};

seedDB();