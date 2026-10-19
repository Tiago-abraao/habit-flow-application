# ✅ HabitFlow

Rastreador de hábitos focado em constância diária. Crie hábitos, marque os últimos 7 dias, veja o horário de conclusão e acompanhe o progresso em um gráfico. Tudo fica salvo no navegador, sem backend e sem frameworks.

**Tecnologias:** HTML5, CSS3, Vanilla JavaScript (ES6+), Chart.js
**Deploy:** GitHub Pages / Vercel

---

## ✨ Funcionalidades

- **Criar e remover hábitos** com nome e categoria, com sanitização das entradas (`escapeHTML`).
- **Matriz semanal** dos últimos 7 dias; clique em um dia para marcar ou desmarcar.
- **Horário de conclusão** (`HH:mm`) salvo e exibido na célula e no tooltip.
- **Métricas:** hábitos ativos, registros de hoje e média de conclusão da semana.
- **Gráfico de barras** (Chart.js) com os hábitos concluídos por dia.
- **Persistência** no `localStorage` (chave `@habit_tracker:habits`).

---

## 🗂️ Modelo de dados

```json
{
  "id": "habit_1760900000000",
  "name": "Ler 15 páginas",
  "category": "Estudo",
  "history": {
    "2026-10-19": { "completed": true, "timestamp": "20:42" }
  }
}
```

---

## 🚀 Como executar

Não há build nem dependências. Basta abrir o `index.html` no navegador (é necessária internet para carregar as CDNs).

---

## 🗺️ Roadmap

- [ ] Streaks 🔥 (dias seguidos)
- [ ] Modo escuro / claro
- [ ] Exportar e importar dados em `.json`
- [ ] PWA (`manifest.json` + Service Worker)

---

## 👤 Autores

- **Felipe Brito** – Desenvolvedor Full-Stack & Instrutor de Tecnologia
- **Tiago** – Desenvolvedor 
