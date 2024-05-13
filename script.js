// Mock data for courses
const coursesData = [
    { id: 1, name: "Introduction to Programming" },
    { id: 2, name: "Web Development Basics" },
    { id: 3, name: "Data Science Fundamentals" },
    // Add more courses as needed
];

function login() {
    // In a real-world scenario, you would perform authentication here
    // For simplicity, let's assume the login is successful

    // Hide the login form
    document.getElementById("loginForm").style.display = "none";

    // Display the course list
    document.getElementById("courseList").style.display = "block";

    // Render the list of courses
    renderCourses();
}

function renderCourses() {
    const coursesList = document.getElementById("courses");

    // Clear existing list items
    coursesList.innerHTML = "";

    // Populate the list with courses
    coursesData.forEach(course => {
        const listItem = document.createElement("li");
        listItem.textContent = course.name;
        coursesList.appendChild(listItem);
    });
}
