// components.js
class ComponentLoader {
    static async load(selector, componentPath) {
        const response = await fetch(componentPath);
        const html = await response.text();
        const element = document.querySelector(selector);
        if (element) {
            element.innerHTML = html;
        } else {
            console.error(`Element ${selector} not found`);
        }
    }
    
    static async loadAll(components) {
        const promises = components.map(c => this.load(c.selector, c.path));
        await Promise.all(promises);
    }
}

// Auto-load components when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
    await ComponentLoader.loadAll([
        { selector: '#sidebar-placeholder', path: './COMPONENTS/sidebar.html' },
        { selector: '#header-placeholder', path: './COMPONENTS/header.html' },
        { selector: '#footer-placeholder', path: './COMPONENTS/footer.html' }
    ]);
});