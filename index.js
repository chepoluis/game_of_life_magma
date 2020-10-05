const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const router = express.Router();

const port = 3000;

// Settings
app.set('port', process.env.PORT || port); //Set the port

// Middleware
app.use(morgan('dev'));

// Routes
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'build', 'index.html'))
});

app.use('/', router);

// Static files
app.use(express.static(path.join(__dirname, 'views', 'build')));;

// Starting server 
app.listen(port, () => { 
    console.log(`server on port ${port}`)
});