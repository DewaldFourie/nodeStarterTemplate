
const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// Define the routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
})

app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact-me.html'));
})

// Handle the 404 - Page Not Found
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'))
})

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})