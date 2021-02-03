'use strict';
var table = document.getElementById('table');
// Creating a Constructor 
function Student(name,course) {
    this.name = name;
    this.grade = generateGarde();
    this.course =course;
    
    Student.prototype.allStudent.push(this);    
}

Student.prototype.allStudent = [];
// Adding a Content of the Table and updating it
Student.prototype.render = function render(){
    var studentRow = document.createElement("tr");
    table.appendChild(studentRow);

    var studentName = document.createElement("td");
    studentRow.appendChild(studentName);
    studentName.textContent = this.name;

    var studentGrade = document.createElement("td");
    studentRow.appendChild(studentGrade);
    studentGrade.textContent = this.grade;

    var studentCourse = document.createElement("td");
    studentRow.appendChild(studentCourse);
    studentCourse.textContent = this.course;
    
}

var form = document.getElementById('form');
form.addEventListener('submit',creatObj);
// Creating the obj for every student
function creatObj(event){
    event.preventDefault();
    var nameData = event.target.studentName.value;
    var courseData = event.target.course.value;

    var userData = new Student(nameData,courseData);

    userData.render();
// store the data in the localStorage
    localStorage.setItem('students', JSON.stringify(Student.prototype.allStudent));
} 

// Creating the table and its heading
caretTable()
function caretTable() {
    var headingRow = document.createElement("tr");
    table.appendChild(headingRow);

    var nameHead = document.createElement("th");
    headingRow.appendChild(nameHead);
    nameHead.textContent = 'Student Name';

    var gradeHead = document.createElement("th");
    headingRow.appendChild(gradeHead);
    gradeHead.textContent = 'Student Grade';

    var courseHead = document.createElement("th");
    headingRow.appendChild(courseHead);
    courseHead.textContent = 'Course';
}
// Generating a Random Grade bet 0 & 100
function generateGarde() {
    return Math.floor(Math.random() * (100 - 0) + 0);
}
// get the data in the localStorage
var lsStudents= [];
if ('students') {
    // localData.innerHTML = '';
    lsStudents = JSON.parse(localStorage.getItem('students'));
    for (var i = 0; i < lsStudents.length; i++) {
        var localData;
        localData = new Student (lsStudents[i].name ,lsStudents[i].grade, lsStudents[i].course);
        console.log(localData);    
        localData.render();
        
    }
    
}

