const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing body data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine to Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Route for the landing page
app.get('/', (req, res) => {
    res.render('index');
});

// Other routes
app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

// Server listen
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
