const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// solves [MONGOOSE] DeprecationWarning
mongoose.set('strictQuery', true);

// connect to mongodb
const dbURI = "mongodb+srv://yujith:Admin123@cluster0.fedb309.mongodb.net/slides-info?retryWrites=true&w=majority";
mongoose.connect(dbURI)
  .then((result) => {
    app.listen(3600, () => console.log('example app is listning on port 3600.'));
  }).catch((err) => {
    console.log(err);
  })

var corsOptions = {
    origin: "http://localhost:3000"
  };
  
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use(bodyParser.json({limit: '50mb'}));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));

// Function to serve all static files
// inside public directory.
app.use(express.static('public')); 

const CarouselRoute = require("./routes/CarouselRouter");
app.use("/api", CarouselRoute);

