const express = require('express');
const mongoose = require('mongoose');
const Event = require('./models/event');
const app = express();
const port = 3000;


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');



mongoose.connect('mongodb+srv://varun_nair:skel1234@projectdb.ambwga7.mongodb.net/?appName=projectDB')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.get('/', async (req, res) => {
    try {

        const featuredEvents = await Event.find({}).limit(3);
        
        res.render('index', { featuredEvents: featuredEvents });
    } catch (err) {
        console.log(err);
        res.status(500).send("Error loading homepage");
    }
});

app.get('/signin', (req, res) => {
    res.render('signin');
});

app.get('/account', (req, res) => {
    res.render('account');
});

// --- Categories ---
app.get('/artists', async (req, res) => {
    try {
        const artists = await Event.find({ category: 'artist' });
        res.render('artists', { artists: artists });
    } catch (err) {
        console.log(err);
        res.status(500).send("Error loading artists");
    }
});

app.get('/comedy', async (req, res) => {
    try {
        
        const comedyEvents = await Event.find({ category: 'comedy' });
        
        res.render('comedy', { comedyEvents: comedyEvents });
    } catch (err) {
        console.log(err);
        res.status(500).send("Error loading comedy shows");
    }
});

app.get('/concerts', async (req, res) => {
    try {
        
        const concerts = await Event.find({ category: 'concert' });
        
        
        res.render('concerts', { concerts: concerts });
    } catch (err) {
        console.log(err);
        res.send("Error loading concerts");
    }
});

app.get('/festivals', async (req, res) => {
    try {
        
        const festivals = await Event.find({ category: 'festival' });
        
        
        res.render('festivals', { festivals: festivals }); 
    } catch (err) {
        console.log(err);
        res.status(500).send("Error loading festivals");
    }
});

app.get('/venues', async (req, res) => {
    try {
        
        const venues = await Event.find({ category: 'venue' });
        res.render('venues', { venues: venues });
    } catch (err) {
        console.log(err);
        res.status(500).send("Error loading venues");
    }
});



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

// --- Admin` ---

// Show the Add Event Page
app.get('/add-event', (req, res) => {
    res.render('add-event');
});

// Handle the Form Submission (Create)
app.post('/add-event', async (req, res) => {
    try {
        // Create a new Event using the data from the form 
        const newEvent = new Event(req.body);
        
        // Save to MongoDB
        await newEvent.save();
        
        // Go back to the homepage (or the specific category page)
        res.redirect('/' + req.body.category + 's'); // e.g., redirects to /concerts
    } catch (err) {
        console.log(err);
        res.send("Error saving event");
    }
});

// --- ADMIN DASHBOARD ---

// Get All Events for the Dashboard
app.get('/admin', async (req, res) => {
    try {
        // Fetch EVERYTHING from the database
        const events = await Event.find({});
        res.render('admin', { events: events });
    } catch (err) {
        console.log(err);
        res.status(500).send("Error loading admin panel");
    }
});

// Handle Delete Request
app.post('/delete-event', async (req, res) => {
    try {
        const idToDelete = req.body.id;
        
        await Event.findByIdAndDelete(idToDelete);
        
        res.redirect('/admin');
    } catch (err) {
        console.log(err);
        res.send("Error deleting event");
    }
});

// --- EDIT PAGE ---

//  Show the Edit Form
app.get('/edit-event/:id', async (req, res) => {
    try {
        // Find the specific event clicked
        const eventToEdit = await Event.findById(req.params.id);
        res.render('edit-event', { event: eventToEdit });
    } catch (err) {
        console.log(err);
        res.send("Error loading edit form");
    }
});

//  Handle the Update
app.post('/edit-event/:id', async (req, res) => {
    try {
        // Find by ID and update with the Form Data (req.body)
        await Event.findByIdAndUpdate(req.params.id, req.body);
        
        // Go back to admin dashboard
        res.redirect('/admin');
    } catch (err) {
        console.log(err);
        res.send("Error updating event");
    }
});

// --- DYNAMIC DETAILS PAGE CODE ---
app.get('/events/:id', async (req, res) => {
    try {
        // 1. Find the event by the ID passed in the URL
        const event = await Event.findById(req.params.id);
        
        // 2. Render the details page with that data
        res.render('details', { event: event });
    } catch (err) {
        res.send("Event not found.");
    }
});