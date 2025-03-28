document.addEventListener("DOMContentLoaded", function () {
    let recordsBody = document.getElementById("recordsBody");

    // Get stored data from localStorage
    let enrolledStudents = JSON.parse(localStorage.getItem("enrolledStudents")) || [];

    // Populate the table
    enrolledStudents.forEach((enrolled) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${enrolled.studentName}</td>
            <td>${enrolled.sectionId}</td>
        `;
        recordsBody.appendChild(row);
    });
});