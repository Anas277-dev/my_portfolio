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









// JavaScript for Theme Toggle
// const themeToggle = document.getElementById('theme-toggle');
// const body = document.body;

// themeToggle.addEventListener('click', () => {
//     body.classList.toggle('dark-theme');
//     if (body.classList.contains('dark-theme')) {
//         themeToggle.textContent = 'Light Mode';
//     } else {
//         themeToggle.textContent = 'Dark Mode';
//     }
// });





// Function to toggle the sidebar
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

// Anchor tag active state
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all anchor tags
        document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));

        // Add active class to the clicked link
        this.classList.add('active');
    });
});

// JavaScript for Theme Toggle
const themeToggleSidebar = document.getElementById('theme-toggle-sidebar');
const themeToggleNav = document.getElementById('theme-toggle-nav');
const body = document.body;

// Function to set the theme
function setTheme(isDark) {
    if (isDark) {
        body.classList.add('dark-theme');
        themeToggleSidebar.textContent = 'Light Mode';
        themeToggleNav.textContent = 'Light Mode';
    } else {
        body.classList.remove('dark-theme');
        themeToggleSidebar.textContent = 'Dark Mode';
        themeToggleNav.textContent = 'Dark Mode';
    }
}

// Check localStorage for theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    setTheme(true);
} else {
    setTheme(false);
}

// Toggle theme on button click (sidebar)
themeToggleSidebar.addEventListener('click', () => {
    const isDark = body.classList.contains('dark-theme');
    setTheme(!isDark);
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
});

// Toggle theme on button click (main navigation)
themeToggleNav.addEventListener('click', () => {
    const isDark = body.classList.contains('dark-theme');
    setTheme(!isDark);
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
});
