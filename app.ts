import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {

student:any={
name:'',
email:'',
phone:'',
qualification:'',
university:'',
year:'',
type:'',
agree:false
};

qualifications=[
"BSc",
"BCA",
"BTech",
"MCA"
];

universities=[
"Anna University",
"Bharathiar University",
"Madras University"
];

years=[
"2022",
"2023",
"2024",
"2025",
"2026"
];

skillsList=[
"HTML",
"CSS",
"JavaScript",
"Angular",
"Python"
];

selectedSkills:string[]=[];

onSkillChange(event:any){

if(event.target.checked){
this.selectedSkills.push(event.target.value);
}
else{
const index=this.selectedSkills.indexOf(event.target.value);
this.selectedSkills.splice(index,1);
}

}

submitForm(form:any){
alert("Application Submitted Successfully");
}

}