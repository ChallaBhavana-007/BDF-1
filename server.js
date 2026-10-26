const express = require('express');

const app = express();
const PORT = 3000;

// Home route
app.get('/', (req, res) => {
    res.status(200).send('Hello! Welcome to our BDF Lab Server.');
});

// About route
app.get('/about', (req, res) => {
    res.status(200).json({
        student: 'CHALLA BHAVANA',
        section: 'S-15',
        lab: 'Backend Development Fundamentals'
    });
});

// Current date and time route
app.get('/time', (req, res) => {
    const currentTime = new Date();

    res.status(200).json({
        date: currentTime.toLocaleDateString(),
        time: currentTime.toLocaleTimeString()
    });
});

// Handle unknown routes
app.use((req, res) => {
    res.status(404).json({
        error: 'Page Not Found',
        message: 'Please check the URL and try again.'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`BDF server running at http://localhost:${PORT}`);
});