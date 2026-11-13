export const ProgressChart = {
    chartInstance: null,

    render(last7Days, habits) {
        const canvas = document.getElementById('progressChart');
        if (!canvas) return;

        this.chartInstance?.destroy();

        const dataValues = last7Days.map((day) =>
            habits.reduce((count, habit) => {
                return habit.history?.[day.dateString]?.completed ? count + 1 : count;
            }, 0)
        );
        const isCompactChart = (context) => context.chart.width <= 400;

        this.chartInstance = new Chart(canvas.getContext('2d'), {
            type: 'bar',
            data: {
                labels: last7Days.map((day) => day.fullDayName),
                datasets: [{
                    label: 'Hábitos concluídos',
                    data: dataValues,
                    backgroundColor: '#2563eb',
                    borderColor: '#1d4ed8',
                    borderWidth: 1,
                    borderRadius: 8,
                    borderSkipped: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                resizeDelay: 100,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: '#1d4ed8',
                        titleFont: { family: 'Inter', size: 12, weight: 'bold' },
                        bodyFont: { family: 'Inter', size: 12 },
                        padding: 8,
                        cornerRadius: 6,
                        callbacks: {
                            title: (items) => {
                                const day = last7Days[items[0].dataIndex];
                                return `${day.dayName} (${day.shortDate})`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: (context) => !isCompactChart(context),
                            text: 'Hábitos concluídos',
                            color: '#475569'
                        },
                        ticks: {
                            stepSize: 1,
                            precision: 0,
                            color: '#475569',
                            font: (context) => ({
                                size: isCompactChart(context) ? 10 : 12
                            })
                        },
                        grid: { color: '#e2e8f0' }
                    },
                    x: {
                        title: {
                            display: (context) => !isCompactChart(context),
                            text: 'Dia da semana',
                            color: '#475569'
                        },
                        ticks: {
                            color: '#475569',
                            minRotation: 0,
                            maxRotation: 0,
                            autoSkip: false,
                            callback(value, index) {
                                const day = last7Days[index];
                                const dayName = this.chart.width <= 400
                                    ? day.dayName
                                    : day.fullDayName;
                                return [dayName, day.shortDate];
                            },
                            font: (context) => ({
                                size: isCompactChart(context) ? 10 : 12
                            })
                        },
                        grid: { display: false }
                    }
                }
            }
        });
    }
};
