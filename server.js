const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static(__dirname));

let courses = [];
let id = 1;

app.get("/api/courses",(req,res)=>{
res.json(courses);
});

app.post("/api/courses",(req,res)=>{

const course={
id:id++,
name:req.body.name,
course:req.body.course,
duration:req.body.duration,
instructor:req.body.instructor
};

courses.push(course);
res.json(course);

});

app.put("/api/courses/:id",(req,res)=>{

const course=courses.find(c=>c.id==req.params.id);

course.name=req.body.name;
course.course=req.body.course;
course.duration=req.body.duration;
course.instructor=req.body.instructor;

res.json(course);

});

app.delete("/api/courses/:id",(req,res)=>{

courses=courses.filter(c=>c.id!=req.params.id);
res.json({message:"Deleted"});

});

app.listen(3000,()=>{
console.log("Server running on http://localhost:3000");
});