import React, { useState } from "react";
import axios from "axios";

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    await axios.post("http://localhost:5000/enroll", formData);

    alert("Course Enrolled Successfully");

    setFormData({
      name: "",
      email: "",
      course: ""
    });

  };

  return (

  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg,#667eea,#764ba2)"
  }}>

    <div style={{
      background: "white",
      padding: "60px",
      borderRadius: "12px",
      width: "500px",
      textAlign: "center",
      boxShadow: "0 0 15px rgba(0,0,0,0.3)"
    }}>

      <h1 style={{
        color:"#ff28a9",
        marginBottom:"30px",
        fontSize:"30px"
      }}>
        Course Enrollment
      </h1>

      <form onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Student Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            width:"100%",
            padding:"14px",
            margin:"12px 0",
            fontSize:"16px"
          }}
        />

        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            width:"100%",
            padding:"14px",
            margin:"12px 0",
            fontSize:"16px"
          }}
        />

        <input
          name="course"
          placeholder="Course Name"
          value={formData.course}
          onChange={handleChange}
          required
          style={{
            width:"100%",
            padding:"14px",
            margin:"12px 0",
            fontSize:"16px"
          }}
        />

        <button
          type="submit"
          style={{
            marginTop:"20px",
            padding:"14px 30px",
            fontSize:"16px",
            background:"#26c7ec",
            color:"white",
            border:"none",
            borderRadius:"6px",
            cursor:"pointer"
          }}
        >
          Enroll
        </button>

      </form>

    </div>

  </div>

);
}

export default App;