// NPM modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = express.Router();

// Own modules
const windows = require('./routes/windows')(router);
const ubuntu = require('./routes/ubuntu')(router);
const android = require('./routes/android')(router);

const config = require('./config/database')

// Express config
const app = express();
const port = process.env.PORT || 5000;

// Database connection
mongoose.connect(config.dbUrl, {
    useNewUrlParser: true
}, (err) => {
    if (err) {
        console.log(`Could not connect to database, ${err}`)
    } else {
        console.log(`Connected to database: ${config.dbName}`)
    }
});

// Middlewares
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.use('/windows', windows);
app.use('/ubuntu', ubuntu);
app.use('/android', android);

// Start servers
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});