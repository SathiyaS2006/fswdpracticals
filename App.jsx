import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [students, setStudents] = useState([]);

  const API = "http://localhost:5000";

  const fetchStudents = async () => {
    const res = await axios.get(`${API}/users`);
    setStudents(res.data);
  };

  const addStudent = async () => {

    if (!name || !phone) {
      alert("Enter Name and Phone");
      return;
    }

    await axios.post(`${API}/add-user`, {
      name,
      phone
    });

    setName("");
    setPhone("");

    fetchStudents();
  };

  const deleteStudent = async (id) => {
    await axios.delete(`${API}/delete-user/${id}`);
    fetchStudents();
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (

    <div style={{ padding: 40 }}>

      <h2>🎓 Student Admission List</h2>

      <input
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <br /><br />

      <button onClick={addStudent}>Add Student</button>

      <h3>Admission Records</h3>

      <ul>

        {students.map((s) => (
          <li key={s.id}>
            {s.name} — {s.phone}

            <button
              style={{ marginLeft: 10 }}
              onClick={() => deleteStudent(s.id)}
            >
              Remove
            </button>

          </li>
        ))}

      </ul>

    </div>

  );
}