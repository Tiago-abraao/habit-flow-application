export const dateService = {
    // Retorna data formatada YYYY-MM-DD
    getFormattedDate(dateObj) {
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const dayOfMonth = String(dateObj.getDate()).padStart(2, '0');
        return `${year}-${month}-${dayOfMonth}`;
    },

    // Retorna exibição para o cabeçalho do dia (ex: "Seg - 17/10")
    getDisplayDate(dateObj) {
        const weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
        const weekdaysFull = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
        const dayName = weekdays[dateObj.getDay()];
        const fullDayName = weekdaysFull[dateObj.getDay()];
        const dayOfMonth = String(dateObj.getDate()).padStart(2, '0');
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        return {
            dayName,
            fullDayName,
            shortDate: `${dayOfMonth}/${month}`
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
            const dayDate = new Date();
            dayDate.setDate(dayDate.getDate() - i);

            const display = this.getDisplayDate(dayDate);
            days.push({
                dateString: this.getFormattedDate(dayDate),
                dayName: display.dayName,
                fullDayName: display.fullDayName,
                shortDate: display.shortDate,
                isToday: i === 0
            });
        }
        return days;
    }
};