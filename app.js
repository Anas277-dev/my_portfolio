// document.addEventListener('DOMContentLoaded', function() {
//     const themeToggle = document.getElementById('theme-toggle');
//     const body = document.body;

//     // Check for saved theme in localStorage
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//         body.classList.add(savedTheme);
//     }

//     // Toggle theme on button click
//     themeToggle.addEventListener('click', function() {
//         if (body.classList.contains('dark-theme')) {
//             body.classList.remove('dark-theme');
//             body.classList.add('light-theme');
//             localStorage.setItem('theme', 'light-theme');
//         } else {
//             body.classList.remove('light-theme');
//             body.classList.add('dark-theme');
//             localStorage.setItem('theme', 'dark-theme');
//         }
//     });
// });


// sidebarcode
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const hamburgerIcon = document.getElementById("hamburger-icon");

    sidebar.classList.toggle("active");

    // Toggle between bars and times (cross) icon
    if (sidebar.classList.contains("active")) {
        hamburgerIcon.classList.remove("fa-bars");
        hamburgerIcon.classList.add("fa-times");
    } else {
        hamburgerIcon.classList.remove("fa-times");
        hamburgerIcon.classList.add("fa-bars");
    }
}
// Add event listeners to all anchor tags inside the sidebar
document.querySelectorAll("#sidebar ul li a").forEach(anchor => {
    anchor.addEventListener("click", () => {
        toggleSidebar(); // Close the sidebar when an anchor is clicked
    });
});



// anchor tag is active code
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        // Pehle sab anchor tags se active class hatao
        document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));

        // Ab sirf iss clicked link ko red kar do
        this.classList.add('active');
    });
});



