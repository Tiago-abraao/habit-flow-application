export const dateService = {
    // Retorna data formatada YYYY-MM-DD
    getFormattedDate(dateObj) {
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const day = String(dateObj.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    },

    // Retorna exibição para o cabeçalho do dia (ex: "Seg - 17/10")
    getDisplayDate(dateObj) {
        const weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
        const dayName = weekdays[dateObj.getDay()];
        const day = String(dateObj.getDate()).padStart(2, '0');
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        return {
            dayName,
            shortDate: `${day}/${month}`
        };
    },

    // Retorna a hora atual exata HH:mm
    getCurrentTimeString() {
        const now = new Date();
        return now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    },

    // Gera array com metadados dos últimos 7 dias
    getLast7Days() {
        const days = [];
        for (let i = 6; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);

            const display = this.getDisplayDate(d);
            days.push({
                dateString: this.getFormattedDate(d),
                dayName: display.dayName,
                shortDate: display.shortDate,
                isToday: i === 0
            });
        }
        return days;
    }
};