function enrollStudent() {
    let studentId = document.getElementById("studentId").value;
    let sectionId = document.getElementById("sectionId").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let subject = document.getElementById("subjectDescription").value;

    if (!studentId || !sectionId || !firstName || !lastName || !subject) {
        alert("Please fill in all fields.");
        return;
    }

    let students = JSON.parse(localStorage.getItem("students")) || [];
    let newStudent = { 
        id: studentId, 
        section: sectionId, 
        name: `${firstName} ${lastName}`, 
        subject: subject 
    };

    students.push(newStudent);
    localStorage.setItem("students", JSON.stringify(students));

    displayStudents(); // Refresh the list

    // Clear input fields
    document.getElementById("studentId").value = "";
    document.getElementById("sectionId").value = "";
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("subjectDescription").value = "";
}

function displayStudents() {
    let studentList = document.getElementById("studentList");
    studentList.innerHTML = ""; // Clear previous list

    let students = JSON.parse(localStorage.getItem("students")) || [];
    
    students.forEach((student, index) => {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${student.name}</strong> - ID: ${student.id}, Section: ${student.section}, Subject: ${student.subject}`;

        // Delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.onclick = function () {
            students.splice(index, 1);
            localStorage.setItem("students", JSON.stringify(students));
            displayStudents();
        };

        li.appendChild(deleteBtn);
        studentList.appendChild(li);
    });
}

// Load students when the page is loaded
document.addEventListener("DOMContentLoaded", displayStudents);
