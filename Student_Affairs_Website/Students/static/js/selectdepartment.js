// Get the URL parameters
let urlParams = new URLSearchParams(window.location.search);

// Retrieve the values from the parameters
let name = urlParams.get("name");
let id = urlParams.get("id");

// Populate the fields with the retrieved values
document.getElementById("name").value = name;
document.getElementById("ID").value = id;

let students = [];
let studentName = '';
if (localStorage.getItem("Students") === null) {
    Students = [];
} else {
    Students = JSON.parse(localStorage.getItem("Students"));
}


function setDepartment() {
    let option = document.getElementById("Dep").value;
    if (option !== "NONE") {
        Students.forEach((student) => {
            if (parseInt(student.ID) === parseInt(id)) {
                student.Department = option;
                localStorage.setItem("Students", JSON.stringify(Students));
                location.href = "studentList.html";
            }
        })
    }
}