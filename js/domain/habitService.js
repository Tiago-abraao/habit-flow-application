
import { storageService } from '../services/storageService.js';
import { dateService } from '../services/dateService.js';

export const habitService = {
    habits: [],

    init() {
        this.habits = storageService.getHabits();
    },

    getAllHabits() {
        return this.habits;
    },

    addHabit(name, category) {
        const newHabit = {
            id: 'habit_' + Date.now(),
            name: name.trim(),
            category: category.trim() || 'Geral',
            history: {}
        };

        this.habits.push(newHabit);

        storageService.saveHabits(this.habits);

        return newHabit;
    },

    deleteHabit(id) {
        this.habits = this.habits.filter(
            habit => habit.id !== id
        );

        storageService.saveHabits(this.habits);
    },

    toggleHabitDay(habitId, dateString) {
        const habit = this.habits.find(
            habit => habit.id === habitId
        );

        if (!habit) return;

        if (!habit.history) {
            habit.history = {};
        }

        if (
            habit.history[dateString] &&
            habit.history[dateString].completed
        ) {
            delete habit.history[dateString];
        } else {
            habit.history[dateString] = {
                completed: true,
                timestamp: dateService.getCurrentTimeString()
            };
        }

        storageService.saveHabits(this.habits);
    },

    clearAllData() {
        this.habits = [];
        storageService.clearAll();
    },

    getCompletedCountToday() {
        const todayStr = dateService.getFormattedDate(new Date());

        return this.habits.filter(habit =>
            habit.history &&
            habit.history[todayStr] &&
            habit.history[todayStr].completed
        ).length;
    },

    getCompletionRate() {
        if (this.habits.length === 0) return 0;

        const last7Days = dateService.getLast7Days();

        const totalPossible = this.habits.length * 7;

        let totalCompleted = 0;

        this.habits.forEach(habit => {
            if (!habit.history) return;

            last7Days.forEach(day => {
                if (
                    habit.history[day.dateString] &&
                    habit.history[day.dateString].completed
                ) {
                    totalCompleted++;
                }
            });
        });

        return Math.round(
            (totalCompleted / totalPossible) * 100
        );
    }
};
