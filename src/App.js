import React, { Component } from 'react'; 
import "bootstrap/dist/css/bootstrap.min.css"; 
import CourseList from './CourseList'; 
 
class App extends Component { 
  render() { 
    return ( 
      <div className="App"> 
        <h1 className="text-center"> JLC BookStore </h1> 
        <br/> 
        <CourseList/> 
      </div> 
    ); 
  } 
} 
export default App;