const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Express App
const app = express();

// Env
const PORT     = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
const users = require('./routes/radios');

// Angular Http content type for POST etc defaults to text/plain at
app.use(bodyParser.text(), function ngHttpFix(req, res, next) {
    try {
        req.body = JSON.parse(req.body);
        next();
    } catch(e) {
        next();
    }
});

app.use('/api', radios);

app.listen(PORT, function() {
    console.log('Listen on http://localhost:' + PORT + ' in ' + NODE_ENV);
});
