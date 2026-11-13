/* ==========================================================================
   COMPONENT: habitForm.js
   ========================================================================== */

import { sanitizeUtils } from '../utils/sanitize.js';

export const HabitForm = {
    init(onAddCallback) {
        const form = document.getElementById('habit-form');
        if (!form) return;

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const nameInput = document.getElementById('habit-name');
            const categoryInput = document.getElementById('habit-category');

            const name = sanitizeUtils.escapeHTML(nameInput.value);
            const category = sanitizeUtils.escapeHTML(categoryInput.value);

            if (name.trim()) {
                onAddCallback(name, category);
                nameInput.value = '';
                categoryInput.value = '';
            }
        });
    }
};