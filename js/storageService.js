export const storageService = {
    STORAGE_KEY: '@habit_tracker:habits',

    getHabits() {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error("Erro ao acessar LocalStorage", e);
            return [];
        }
    },

    saveHabits(habits) {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(habits));
        } catch (e) {
            console.error("Erro ao salvar no LocalStorage", e);
        }
    },

    clearAll() {
        localStorage.removeItem(this.STORAGE_KEY);
    }
};