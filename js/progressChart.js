 const ProgressChart = {
            chartInstance: null,

            render(last7Days, habits) {
                const canvas = document.getElementById('progressChart');
                if (!canvas) return;
                const ctx = canvas.getContext('2d');

                // Destruição prévia e limpa do gráfico antigo para evitar travamentos (Logica)
                if (this.chartInstance) {
                    this.chartInstance.destroy();
                }

                // Cálculo total de hábitos concluídos por dia (Logica)
                const labels = last7Days.map(d => `${d.dayName} (${d.shortDate})`);
                const dataValues = last7Days.map(d => {
                    return habits.reduce((acc, habit) => {
                        return (habit.history && habit.history[d.dateString] && habit.history[d.dateString].completed) ? acc + 1 : acc;
                    }, 0);
                });

                // Instanciação limpa do gráfico de barras azul (Estilização)
                this.chartInstance = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Concluídos',
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
                        plugins: {
                            legend: { display: false },
                            tooltip: {
                                backgroundColor: '#1d4ed8',
                                titleFont: { family: 'Inter', size: 12, weight: 'bold' },
                                bodyFont: { family: 'Inter', size: 12 },
                                padding: 8,
                                cornerRadius: 6
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                ticks: { stepSize: 1, color: '#475569' },
                                grid: { color: '#e2e8f0' }
                            },
                            x: {
                                ticks: { color: '#475569' },
                                grid: { display: false }
                            }
                        }
                    }
                });
            }
        };