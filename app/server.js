const express = require('express');
//const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
var bodyParser = require('body-parser')
require('dotenv').config();

const app = express();
//app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false },
    (err) => { if (err) console.log(JSON.stringify(err)) });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});


//היכולת להתעסק עם קבצים
const fileupload = require('express-fileupload');
app.use(fileupload({ createParentPath: true }))


// const communitiesRouter = require('./routes/communities');
const router = require('./routes/api')
const viewsRouter = require('./routes/views')

app.use('/api', router);
app.use(express.static(path.join((__dirname, "./build"))));
app.use('/*', viewsRouter)
// app.use('/users', usersRouter);
// app.use('/communities', communitiesRouter);
app.use(show);
function show(req, res, next) {
    console.log('original url: ');
    console.log(req.originalUrl);
    next();
}


// app.set('views', path.join(__dirname, 'views'))


app.listen(3000, () => {
    console.log(`!!Server is running on port 3000`);
});