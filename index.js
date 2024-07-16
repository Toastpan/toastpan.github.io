document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    dropdownToggle.addEventListener("click", function () {
        dropdownMenu.classList.toggle("active");
    });

    const sidebarToggleBtn = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const header = document.querySelector('.header');
    const overlay = document.getElementById('overlay');
    sidebar.style.transform = 'translateX(-100%)';
    handleResize();

    function closeSidebar() {
        sidebar.style.transform = 'translateX(-100%)';
        sidebarToggleBtn.style.display = 'block';
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    function toggleMenu() {
        const isSidebarHidden = sidebar.style.transform === 'translateX(-100%)';
        sidebar.style.transform = isSidebarHidden ? 'translateX(0)' : 'translateX(-100%)';
        sidebarToggleBtn.style.display = isSidebarHidden ? 'none' : 'block';
        overlay.style.display = isSidebarHidden ? 'block' : 'none';
        document.body.style.overflow = isSidebarHidden ? 'hidden' : 'auto';
    }

    sidebarToggleBtn.addEventListener('click', toggleMenu);

    document.addEventListener('click', function (event) {
        if (!sidebar.contains(event.target) && event.target !== sidebarToggleBtn) {
            const isMobile = window.innerWidth <= 768;
            const isSidebarHidden = sidebar.style.transform === 'translateX(-100%)';

            if (isMobile) {
                closeSidebar();
            }
        }
    });

    function handleResize() {
        const isMobile = window.innerWidth <= 768;
        const isSidebarHidden = sidebar.style.transform === 'translateX(-100%)';

        if (isMobile) {
            document.getElementById('WTN').textContent = 'ImThatBlueWolf’s website!';
        } else {
            document.getElementById('WTN').textContent = 'Welcome to my website!';
        }

        if (!isMobile) {
            closeSidebar();
            header.style.display = 'flex';
            sidebarToggleBtn.style.display = 'none';
        } else {
            header.style.display = 'none';
            sidebarToggleBtn.style.display = isSidebarHidden ? 'block' : 'none';
        }
    }

    window.addEventListener('resize', handleResize);
});