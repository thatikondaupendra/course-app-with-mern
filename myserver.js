const express = require("express"); 
const bodyParser = require("body-parser"); 
const dotenv = require("dotenv"); 
const mongoose = require("mongoose"); 
const cors = require("cors"); 
const path = require("path"); 
 
/** 
 * Load environment variables from .env.jlc file. 
 */ 
dotenv.config({ path: "env.jlc" }); 
 
/** 
 * Connect to MongoDB. 
 */ 
mongoose 
  .connect(process.env.MONGODB_URI, { 
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
  }) 
  .then( 
    () => { 
      console.log("MongoDB connected successfully."); 
    }, 
    (error) => { 
      console.error(error); 
      console.log( 
        "MongoDB connection error. Please make sure MongoDB is running." 
      ); 
  process.exit(); 
    } 
  ); 
 
/** 
 * Add middlewares 
 */ 
const app = express(); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(express.static(path.join(__dirname, "build"))); 
app.use(cors()); 
 
const mycourseController = require("./myserver/controllers/CourseController"); 
app.use("/myapi/", mycourseController); 
 
/** 
 * Set Response for requestURI - /hello 
 */ 
app.get("/hello", (req, res) => { 
    console.log("Request for - /hello"); 
     return res.send("Hello Guys -- I am Ready"); 
  }); 
 
  app.get("*", (req, res) => { 
    res.sendFile( 
      path.join(__dirname, "build", "index.html") 
    ); 
  }); 
 
  /** 
 * start Express server on port 5300 
 */ 
 
const PORT = process.env.PORT || 5300; 
app.listen(PORT, () => { 
    console.log("Hello, Express server is running at http://localhost:%d", PORT); 
    console.log("Press CTRL-C to stop\n"); 
  }); 
