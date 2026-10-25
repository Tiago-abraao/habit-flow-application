import { initSidebarToggle } from './toggle.js';

const loadComponent = async (element) => {
    const componentName = element.dataset.component;

    try {
        const response = await fetch(`components/${componentName}.html`);

        if (!response.ok) {
            throw new Error(`Erro ao carregar ${componentName}: ${response.status}`);
        }

        element.innerHTML = await response.text();
        await loadNestedComponents(element);
    } catch (error) {
        console.error(error);
    }
};

const loadNestedComponents = (root) => {
    const elements = root.querySelectorAll("[data-component]");
    return Promise.all([...elements].map(loadComponent));
};

const initializeComponents = async () => {
    await loadNestedComponents(document);

    // avisa que todo o HTML já está na página
    document.dispatchEvent(new Event("components:loaded"));

    // Inicializa o comportamento da Sidebar AGORA que os elementos já foram injetados
    initSidebarToggle();
};

initializeComponents();