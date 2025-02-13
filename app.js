document.addEventListener("DOMContentLoaded", function () {
    // Text Animation
    function typeText(element, text, delay = 100, callback) {
        let index = 0;
        element.innerHTML = "";
        function type() {
            if (index < text.length) {
                element.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, delay);
            } else if (callback) {
                setTimeout(callback, 1000);
            }
        }
        type();
    }

    function animateText() {
        typeText(document.getElementById("name"), "Web Developer", 100, () => {
            typeText(document.getElementById("name"), "MVC Developer", 100, animateText);
        });
    }

    setTimeout(animateText, 1000);

    // Sidebar Toggle
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

    // Sidebar Toggle on Click
    document.getElementById("hamburger-icon").addEventListener("click", toggleSidebar);

    // Close Sidebar When Link Clicked
    document.querySelectorAll("#sidebar ul li a").forEach(anchor => {
        anchor.addEventListener("click", () => {
            toggleSidebar();
        });
    });

    // Anchor Tag Active State
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all anchor tags
            document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));

            // Add active class to the clicked link
            this.classList.add('active');
        });
    });

    // Theme Toggle Functionality
    const themeToggleSidebar = document.getElementById('theme-toggle-sidebar');
    const themeToggleNav = document.getElementById('theme-toggle-nav');
    const body = document.body;

    function setTheme(isDark) {
        const moonIcon = '<i class="fas fa-moon"></i>';
        const sunIcon = '<i class="fas fa-sun"></i>';

        if (isDark) {
            body.classList.add('dark-theme');
            themeToggleSidebar.innerHTML = `${sunIcon} `;
            themeToggleNav.innerHTML = `${sunIcon} `;
        } else {
            body.classList.remove('dark-theme');
            themeToggleSidebar.innerHTML = `${moonIcon} `;
            themeToggleNav.innerHTML = `${moonIcon} `;
        }
    }

    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme === 'dark');

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
});

function downloadPDF() {
    // Provide the correct path to your PDF file
    const pdfPath = "image/myCv.pdf"; // Change this to the actual path of your PDF file

    // Create an anchor element
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "image/myCv.pdf"; // Name the downloaded file

    // Append the anchor to the body, trigger click, and remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}