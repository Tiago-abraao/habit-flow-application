
export function initializeSidebarToggle() {
    const menuToggleButton = document.getElementById('menu-toggle');
    const closeButton = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar-nav');
    const overlay = document.getElementById('sidebar-overlay');

    if (!menuToggleButton || !sidebar || !overlay) return;

    const toggleSidebar = (isOpen) => {
        sidebar.classList.toggle('active', isOpen);
        overlay.classList.toggle('active', isOpen);

        menuToggleButton.setAttribute('aria-expanded', String(isOpen));
        overlay.setAttribute('aria-hidden', String(!isOpen));

        document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    menuToggleButton.addEventListener('click', () => toggleSidebar(true));

    closeButton?.addEventListener('click', () => toggleSidebar(false));

    overlay.addEventListener('click', () => toggleSidebar(false));

    // Fechar com Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && sidebar.classList.contains('active')) {
            toggleSidebar(false);
        }
    });
}
