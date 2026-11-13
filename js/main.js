
import './components/componentLoader.js';
import { habitService } from './domain/habitService.js';
import { dateService } from './services/dateService.js';
import { HabitForm } from './ui/habitForm.js';
import { HabitList } from './ui/habitList.js';
import { ProgressChart } from './ui/progressChart.js';
import { initSidebarToggle } from './ui/toggle.js';
import { sanitizeUtils } from './utils/sanitize.js';

function renderApp() {
    const habits = habitService.getAllHabits();
    const last7Days = dateService.getLast7Days();

    // Atualiza métricas globais
    const metricTotal = document.getElementById('metric-total');
    const metricToday = document.getElementById('metric-today');
    const metricRate = document.getElementById('metric-rate');

    if (metricTotal) {
        metricTotal.textContent = habits.length;
    }

    if (metricToday) {
        metricToday.textContent = habitService.getCompletedCountToday();
    }

    if (metricRate) {
        metricRate.textContent = `${habitService.getCompletionRate()}%`;
    }

    // Renderiza lista de hábitos
    HabitList.render(
        habits,
        last7Days,

        (habitId, dateString) => {
            habitService.toggleHabitDay(habitId, dateString);
            renderApp();
        },

        (habitId) => {
            habitService.deleteHabit(habitId);

            if (typeof sanitizeUtils.showToast === 'function') {
                sanitizeUtils.showToast('Hábito removido.');
            }

            renderApp();
        }
    );

    // Renderiza gráfico semanal
    ProgressChart.render(last7Days, habits);
}

// Inicialização após carregamento dos componentes
document.addEventListener('components:loaded', () => {
    initSidebarToggle();

    // 1. Inicializa armazenamento
    habitService.init();

    // 2. Inicializa formulário
    HabitForm.init((name, category) => {
        habitService.addHabit(name, category);

        if (typeof sanitizeUtils.showToast === 'function') {
            sanitizeUtils.showToast('Hábito adicionado com sucesso!');
        }

        renderApp();
    });

    // 3. Configura botão de reset
    const btnResetAll = document.getElementById('btn-reset-all');

    if (btnResetAll) {
        btnResetAll.addEventListener('click', () => {

            if (confirm('Tem certeza de que deseja apagar todos os hábitos e históricos?')) {

                habitService.clearAllData();

                if (typeof sanitizeUtils.showToast === 'function') {
                    sanitizeUtils.showToast('Todos os dados foram apagados.');
                }

                renderApp();
            }
        });
    }

    // 4. Primeira renderização
    renderApp();
});