/* ==========================================================================
   UTILS: sanitize.js
   ========================================================================== */

export const sanitizeUtils = {
    toastTimer: null,

    escapeHTML(str) {
        if (!str) return '';
        return str.replace(/[&<>'"]/g, 
            tag => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag)
        );
    },

    showToast(message) {
        let container = document.querySelector('.toast-container');

        if (!container) {
            container = document.createElement('div');
            container.className = 'toast-container';
            container.setAttribute('role', 'status');
            container.setAttribute('aria-live', 'polite');
            document.body.appendChild(container);
        }

        if (this.toastTimer) {
            window.clearTimeout(this.toastTimer);
        }

        container.innerHTML = `
            <div class="toast">
                <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
                <span>${this.escapeHTML(message)}</span>
            </div>
        `;

        this.toastTimer = window.setTimeout(() => {
            container.remove();
            this.toastTimer = null;
        }, 3000);
    }
};