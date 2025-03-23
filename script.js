document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(item => {
        item.addEventListener("click", function () {
            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove("active"));
            
            
            this.classList.add("active");
            
            
            const menu = this.nextElementSibling;
            if (menu && menu.classList.contains("submenu")) {
                const isVisible = menu.style.display === "block";
                document.querySelectorAll(".submenu").forEach(sub => sub.style.display = "none");
                menu.style.display = isVisible ? "none" : "block";
            }
        });
    });
});
