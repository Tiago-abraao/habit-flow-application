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

    // Notifica os módulos da interface após inserir todos os fragmentos HTML.
    document.dispatchEvent(new Event("components:loaded"));
};

initializeComponents();