npm install react-router-dom
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const employees = [
  { id: 1, name: "Arun", dept: "HR", exp: "5 Years" },
  { id: 2, name: "Meena", dept: "Finance", exp: "3 Years" },
  { id: 3, name: "Rahul", dept: "IT", exp: "2 Years" }
];

function Home() {
  return (
    <div style={styles.center}>
      <h2>🏢 Employee Management System</h2>
      <p>Welcome to the Employee Dashboard</p>
      <p>Total Employees: <strong>{employees.length}</strong></p>
    </div>
  );
}

function EmployeeList() {
  return (
    <div>
      <h2>👨‍💼 Employees</h2>

      <div style={styles.cardContainer}>
        {employees.map(emp => (
          <div key={emp.id} style={styles.card}>
            <h3>{emp.name}</h3>
            <p>Department: {emp.dept}</p>
            <p>Experience: {emp.exp}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

function Profile() {
  return (
    <div style={styles.center}>
      <h2>👤 Manager Profile</h2>
      <p>Name: Admin</p>
      <p>Role: HR Manager</p>
    </div>
  );
}

function EmployeeDashboard() {
  return (
    <Router>

      {/* Navigation Bar */}
      <div style={styles.navbar}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/employees">Employees</Link>
        <Link style={styles.link} to="/profile">Profile</Link>
      </div>

      {/* Main Content */}
      <div style={styles.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>

    </Router>
  );
}

const styles = {

  navbar:{
    backgroundColor:"#2c3e50",
    padding:"25px",
    display:"flex",
    gap:"200px",
    justifyContent:"center"
  },

  link:{
    color:"white",
    textDecoration:"none",
    fontWeight:"bold",
    fontSize:"18px"
  },

  container:{
    width:"2000px",
    margin:"30px auto",
    padding:"30px",
    backgroundColor:"#c2d9ef",
    borderRadius:"10px",
    minHeight:"100vh",
    boxShadow:"0 3px 10px rgba(0,0,0,0.1)"
  },

  center:{
    textAlign:"center"
  },

  cardContainer:{
    display:"flex",
    gap:"30px",
    marginTop:"30px",
    justifyContent:"center",
    flexWrap:"wrap"
  },

  card:{
    backgroundColor:"#ffffff",
    padding:"25px",
    borderRadius:"10px",
    width:"200px",
    textAlign:"center",
    boxShadow:"0 3px 10px rgba(0,0,0,0.15)"
  }

};


export default EmployeeDashboard;

