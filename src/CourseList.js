import React, { Component } from "react"; 
 
import axios from 'axios'; 
 
class CourseList extends Component { 
 
  state={ 
    mycourses:[] 
  } 
  componentDidMount(){ 
    console.log("componentDidMount"); 
    //const URL="https://coursecube.com/jlc-rest-api/mini-courses"; 
    const URL="http://localhost:5300/myapi/mycourses"; 
    axios.get(URL) 
    .then(myresponse => { 
     this.setState({mycourses:myresponse.data}); 
    }); 
 
   } 
  render() { 
    const mycourseList= this.state.mycourses.map( 
      mycourse => { 
        return ( 
          <tr key={mycourse.courseId}> 
            <td> {mycourse.courseId} </td> 
            <td> {mycourse.courseName} </td> 
            <td> {mycourse.duration} </td> 
            <td> {mycourse.trainer} </td> 
            <td> {mycourse.enrollments} </td> 
           </tr> 
        ); 
      } 
    ); 
    return ( 
      <div className="container"> 
        <br /> 
        <table className="table"> 
          <thead> 
            <tr>  
              <th> Course ID</th> 
              <th> Course Name</th> 
              <th> Duration</th> 
              <th> Trainer</th> 
              <th> Enrollments</th> 
 
           </tr> 
            </thead> 
            <tbody> 
              {mycourseList} 
            </tbody> 
        </table> 
      </div> 
    ); 
  } 
} 
export default CourseList; 
