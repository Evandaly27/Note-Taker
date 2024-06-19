const express = require('express');
const apiRoute = require('./routes/apiRoute');
const htmlRoute = require('./routes/htmlRoute');

// create an express server
const app = express();
const PORT = process.env.PORT || 3001;

// middleware to parse incoming data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoute);
app.use('/', htmlRoute);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// start the server

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});