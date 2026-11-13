
import { loadComponents } from './components/componentLoader.js';
import { habitService } from './services/habitService.js';
import { dateService } from './services/dateService.js';
import { HabitForm } from './components/habitForm.js';
import { HabitList } from './components/habitList.js';
import { ProgressChart } from './components/progressChart.js';
import { initializeSidebarToggle } from './components/sidebarToggle.js';
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

            sanitizeUtils.showToast('Hábito removido.');

            renderApp();
        }
    );

    // Renderiza gráfico semanal
    ProgressChart.render(last7Days, habits);
}

function initializeApp() {
    initializeSidebarToggle();
    habitService.init();

    HabitForm.init((name, category) => {
        habitService.addHabit(name, category);
        sanitizeUtils.showToast('Hábito adicionado com sucesso!');
        renderApp();
    });

    const resetAllButton = document.getElementById('btn-reset-all');

    resetAllButton?.addEventListener('click', () => {
        if (!confirm('Tem certeza de que deseja apagar todos os hábitos e históricos?')) {
            return;
        }

        habitService.clearAllData();
        sanitizeUtils.showToast('Todos os dados foram apagados.');
        renderApp();
    });

    renderApp();
}

loadComponents()
    .then(initializeApp)
    .catch((error) => {
        console.error('Não foi possível inicializar o HabitFlow.', error);
    });