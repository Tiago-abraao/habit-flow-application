/* ==========================================================================
   UTILS: sanitize.js
   ========================================================================== */

export const sanitizeUtils = {
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
        // Exemplo simples de toast ou console caso não tenha implementado na tela
        console.log("Toast:", message);
    }
};