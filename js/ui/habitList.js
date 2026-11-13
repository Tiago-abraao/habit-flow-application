import { sanitizeUtils } from '../utils/sanitize.js';

export const HabitList = {
    container: null,

    render(habits, last7Days, onToggleDay, onDeleteHabit) {
        // Busca o elemento somente quando for renderizar
        this.container = document.getElementById('habits-matrix');

        if (!this.container) {
            console.error('Elemento #habits-matrix não encontrado no HTML.');
            return;
        }

        if (habits.length === 0) {
            this.container.innerHTML = `
                <div class="empty-state">
                    <i class="fa-solid fa-clipboard-list empty-icon"></i>
                    <h3 class="empty-title">Nenhum hábito cadastrado</h3>
                    <p class="empty-desc">
                        Adicione um novo hábito acima para começar a registrar seu progresso!
                    </p>
                </div>
            `;
            return;
        }

        this.container.innerHTML = habits.map(habit => {
            const safeName = sanitizeUtils.escapeHTML(habit.name);
            const safeCategory = sanitizeUtils.escapeHTML(habit.category);

            const daysGridHTML = last7Days.map(day => {
                const dayRecord = habit.history
                    ? habit.history[day.dateString]
                    : null;

                const isCompleted = dayRecord && dayRecord.completed;
                const timestamp = dayRecord ? dayRecord.timestamp : '';

                const tooltip = isCompleted
                    ? `Concluído às ${timestamp}`
                    : `Marcar ${day.dayName} (${day.shortDate})`;

                return `
                    <div class="day-cell ${isCompleted ? 'completed' : ''}"
                         data-habit-id="${habit.id}"
                         data-date="${day.dateString}"
                         data-tooltip="${tooltip}">
                        <span class="day-label">${day.dayName}</span>
                        <span class="day-date">${day.shortDate}</span>
                        ${
                            isCompleted
                                ? `<i class="fa-solid fa-circle-check check-icon"></i>
                                   <span class="timestamp-badge">${timestamp}</span>`
                                : `<i class="fa-regular fa-circle check-icon"></i>`
                        }
                    </div>
                `;
            }).join('');

            return `
                <div class="habit-row">
                    <div class="habit-info">
                        <div class="habit-name">${safeName}</div>
                        <span class="habit-category">${safeCategory}</span>
                    </div>

                    <div class="days-grid">
                        ${daysGridHTML}
                    </div>

                    <div class="habit-actions">
                        <button class="btn-delete"
                                data-action="delete"
                                data-id="${habit.id}"
                                title="Excluir hábito">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>
            `;
        }).join('');

        this.bindEvents(onToggleDay, onDeleteHabit);
    },

    bindEvents(onToggleDay, onDeleteHabit) {
        this.container.onclick = (e) => {
            const dayCell = e.target.closest('.day-cell');

            if (dayCell) {
                const habitId = dayCell.getAttribute('data-habit-id');
                const dateString = dayCell.getAttribute('data-date');

                onToggleDay(habitId, dateString);
                return;
            }

            const deleteBtn = e.target.closest('[data-action="delete"]');

            if (deleteBtn) {
                const habitId = deleteBtn.getAttribute('data-id');
                onDeleteHabit(habitId);
            }
        };
    }
};