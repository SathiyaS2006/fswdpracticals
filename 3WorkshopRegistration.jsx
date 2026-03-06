import React, { useState } from "react";

function WorkshopRegistration() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    workshop: "",
    experience: "",
    certificateFile: null,
    agree: false
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {

    const { name, value, type, checked, files } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value
    });

  };

  const validate = () => {

    let newErrors = {};

    if (!formData.name || formData.name.length < 3)
      newErrors.name = "Name must be at least 3 characters";

    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone number must be 10 digits";

    if (!formData.college)
      newErrors.college = "College name required";

    if (!formData.workshop)
      newErrors.workshop = "Select workshop topic";

    if (!formData.experience)
      newErrors.experience = "Enter your experience";

    if (!formData.certificateFile)
      newErrors.certificateFile = "Upload previous certificate";

    if (!formData.agree)
      newErrors.agree = "You must accept terms";

    return newErrors;

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {

      setSubmitted(true);
      alert("🎉 Workshop Registration Successful!");

    }

  };

  return (

    <div style={styles.page}>
      <div style={styles.card}>

        <h2 style={styles.heading}>Workshop Registration Form</h2>

        <form onSubmit={handleSubmit}>

          <input style={styles.input} name="name" placeholder="Full Name" onChange={handleChange}/>
          <p style={styles.error}>{errors.name}</p>

          <input style={styles.input} name="email" placeholder="Email" onChange={handleChange}/>
          <p style={styles.error}>{errors.email}</p>

          <input style={styles.input} name="phone" placeholder="Phone Number" onChange={handleChange}/>
          <p style={styles.error}>{errors.phone}</p>

          <input style={styles.input} name="college" placeholder="College Name" onChange={handleChange}/>
          <p style={styles.error}>{errors.college}</p>

          <select style={styles.input} name="workshop" onChange={handleChange}>
            <option value="">Select Workshop Topic</option>
            <option value="React">React Development</option>
            <option value="AI">Artificial Intelligence</option>
            <option value="Cyber">Cyber Security</option>
            <option value="Cloud">Cloud Computing</option>
          </select>
          <p style={styles.error}>{errors.workshop}</p>

          <textarea
            style={styles.textarea}
            name="experience"
            placeholder="Your experience in programming"
            onChange={handleChange}
          />
          <p style={styles.error}>{errors.experience}</p>

          <label style={styles.label}>Upload Previous Certificate</label>
          <input
            style={styles.input}
            type="file"
            name="certificateFile"
            onChange={handleChange}
          />
          <p style={styles.error}>{errors.certificateFile}</p>

          <label style={styles.checkboxLabel}>
            <input type="checkbox" name="agree" onChange={handleChange}/>
            I agree to workshop guidelines
          </label>
          <p style={styles.error}>{errors.agree}</p>

          <button style={styles.button} type="submit">
            Register
          </button>

        </form>

        {submitted && (
          <p style={styles.success}>
            🎉 Registration Completed Successfully!
          </p>
        )}

      </div>
    </div>

  );

}

const styles = {

  page:{
    background:"linear-gradient(to right,#667eea,#764ba2)",
    minHeight:"100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },

  card:{
    background:"#ffffff",
    padding:"35px",
    borderRadius:"12px",
    width:"420px",
    boxShadow:"0 6px 18px rgba(0,0,0,0.2)"
  },

  heading:{
    textAlign:"center",
    marginBottom:"20px",
    color:"#2c3e50"
  },

  input:{
    width:"100%",
    padding:"9px",
    marginTop:"8px",
    borderRadius:"6px",
    border:"1px solid #ccc"
  },

  textarea:{
    width:"100%",
    padding:"9px",
    marginTop:"8px",
    borderRadius:"6px",
    border:"1px solid #ccc",
    height:"60px"
  },

  label:{
    marginTop:"10px",
    fontWeight:"bold",
    display:"block"
  },

  checkboxLabel:{
    marginTop:"10px",
    display:"block"
  },

  button:{
    width:"100%",
    padding:"10px",
    marginTop:"15px",
    background:"#27ae60",
    color:"white",
    border:"none",
    borderRadius:"6px",
    cursor:"pointer",
    fontWeight:"bold"
  },

  error:{
    color:"red",
    fontSize:"12px"
  },

  success:{
    color:"green",
    textAlign:"center",
    marginTop:"12px",
    fontWeight:"bold"
  }

};

export default WorkshopRegistration;
