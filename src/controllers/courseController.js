const express = require("express"); 
const mycourseRoute = express.Router(); 

let Course=require("../models/courseModel")
 
// Get All Courses 
//mycourseRoute.route("/mycourses").get( 
//    (req, res) => { 
//    console.log("/mycourses ---get()"); 
//    Course.find((error, data) => { 
//      if (error) { 
//        return next(error); 
//      } else { 
//        res.json(data); 
//      } 
//    }).sort({ bookId: 1 }); 
//  }); 
//

// Example route to get courses
mycourseRoute.get('/mycourses', async (req, res) => {
    console.log('/mycourses ---get()');
  try {
    const courses = await Course.find({}).sort({bookId:1});
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//mycourseRoute.get('/mycourses', (req, res) => {
//    res.send('Hello from my API!');
//});
   
  // Get Course By Id 
  mycourseRoute.get("/mycourse/:courseId", async (req, res, next) => { 
    console.log("/mycourse/:",req.params.courseId," --- get()"); 
    try {
      const data = await Course.findOne({ courseId: req.params.courseId });
      if (!data) {
        return res.status(404).json({ message: "Course not found" });
      }
      res.json(data); 
    } catch (error) { 
      next(error); 
    } 
  });
   
  module.exports = mycourseRoute; 