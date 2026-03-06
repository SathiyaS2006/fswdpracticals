import React from "react";
import AddStudy from "./assets/5SmartStudyPlanner/components/AddStudy";
import StudyList from "./assets/5SmartStudyPlanner/components/StudyList";

function App() {

  return (

    <div style={{
      minHeight:"100vh",
      background:"linear-gradient(135deg,#4facfe,#00f2fe)",
      padding:"40px"
    }}>

      <div style={{
        maxWidth:"700px",
        margin:"auto",
        background:"white",
        padding:"30px",
        borderRadius:"15px",
        boxShadow:"0 5px 20px rgba(0,0,0,0.2)"
      }}>

        <h1 style={{textAlign:"center"}}>
          📚 Smart Study Planner
        </h1>

        <AddStudy/>
        <StudyList/>

      </div>

    </div>

  );

}

export default App;
