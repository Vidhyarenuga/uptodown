const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Windows = require('./models/Windows');
const Ubuntu = require('./models/Ubuntu');
const Android = require('./models/Android');
var router=express.Router();
const app = express();
mongoose
.connect('mongodb://localhost:27017/dashboard')
.then(()=> console.log('MongoDB Connected..'))
.catch(err => console.log(err));


app.use(bodyParser.json());
app.use('./models/windows',Windows);
app.use('./models/ubuntu',Ubuntu);
app.use('./models/android',Android);

const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Server started on port ${port}`));

module.exports=router;