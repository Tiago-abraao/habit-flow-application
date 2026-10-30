
export function initSidebarToggle() {
    const menuToggle = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar-nav');
    const overlay = document.getElementById('sidebar-overlay');

    if (!menuToggle || !sidebar || !overlay) return;

    // Clona e substitui o botão original
    const newMenuToggle = menuToggle.cloneNode(true);
    menuToggle.replaceWith(newMenuToggle);

    // Centraliza a lógica de abertura e fechamento
    const toggleSidebar = (isOpen) => {
        sidebar.classList.toggle('active', isOpen);
        overlay.classList.toggle('active', isOpen);

        newMenuToggle.setAttribute('aria-expanded', String(isOpen));
        overlay.setAttribute('aria-hidden', String(!isOpen));

        document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    // Eventos de abertura e fechamento
    newMenuToggle.addEventListener('click', () => toggleSidebar(true));

    closeBtn?.addEventListener('click', () => toggleSidebar(false));

    overlay.addEventListener('click', () => toggleSidebar(false));

    // Fechar com Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar.classList.contains('active')) {
            toggleSidebar(false);
        }
    });
}

// Inicialização após carregamento dos componentes
document.addEventListener('components:loaded', initSidebarToggle);
