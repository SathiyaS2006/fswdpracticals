const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

const filePath = path.join(__dirname, "students.json");

// create file if not exists
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "[]");
}

app.post("/enroll", (req, res) => {

  const newStudent = req.body;

  const data = fs.readFileSync(filePath);
  const students = JSON.parse(data);

  students.push(newStudent);

  fs.writeFileSync(filePath, JSON.stringify(students, null, 2));

  res.send("Course Enrolled Successfully");

});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});