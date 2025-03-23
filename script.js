document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(item => {
        item.addEventListener("click", function () {
            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove("active"));
            
            // Add active class to clicked item
            this.classList.add("active");
            
            // Toggle submenu visibility
            const menu = this.nextElementSibling;
            if (menu && menu.classList.contains("submenu")) {
                const isVisible = menu.style.display === "block";
                document.querySelectorAll(".submenu").forEach(sub => sub.style.display = "none");
                menu.style.display = isVisible ? "none" : "block";
            }
        });
    });
});
