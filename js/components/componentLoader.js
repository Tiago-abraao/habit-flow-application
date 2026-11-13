async function loadComponent(element) {
    const componentName = element.dataset.component;
    const response = await fetch(`components/${componentName}.html`);

    if (!response.ok) {
        throw new Error(`Erro ao carregar ${componentName}: ${response.status}`);
    }

    element.innerHTML = await response.text();
    await loadNestedComponents(element);
}

async function loadNestedComponents(root) {
    const elements = root.querySelectorAll("[data-component]");
    await Promise.all([...elements].map(loadComponent));
}

export async function loadComponents() {
    await loadNestedComponents(document);
}