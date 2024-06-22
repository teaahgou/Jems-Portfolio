// JavaScript code to animate the role text
const roleElement = document.getElementById('role');
const roles = ['UI/UX Designer', 'Web Developer', 'Web Designer'];
let currentIndex = 0;

function animateRole() {
    roleElement.textContent = roles[currentIndex];
    currentIndex = (currentIndex + 1) % roles.length;
}

setInterval(animateRole, 2000); // Change text every 2 seconds (2000 milliseconds)

