# HabitFlow

Aplicação de acompanhamento de hábitos feita com HTML, CSS e JavaScript puro. Os dados ficam no navegador, sem backend ou processo de build.

## Funcionalidades

- Criar e remover hábitos com nome e categoria.
- Registrar conclusão diária e horário nos últimos sete dias.
- Acompanhar métricas e gráfico de progresso semanal.
- Persistir hábitos no `localStorage` (`@habit_tracker:habits`).

## Estrutura

```text
components/          Fragmentos HTML carregados pela aplicação
js/
  components/        Carregamento e composição dos fragmentos
  domain/            Regras de negócio dos hábitos
  services/          Datas e persistência
  ui/                Formulário, lista, gráfico e interações
  utils/             Funções auxiliares de apresentação
  main.js            Ponto de entrada e coordenação da aplicação
styles/
  base/              Reset e estilos globais
  components/        Estilos dos componentes visuais
  layout/            Header, marca e sidebar
  responsive/        Ajustes responsivos
```

Cada módulo mantém uma responsabilidade específica. `js/main.js` coordena a inicialização, enquanto os módulos de domínio, serviços e interface podem evoluir de forma independente.

## Como executar

Como a aplicação carrega os fragmentos HTML com `fetch`, execute-a por um servidor HTTP local em vez de abrir o arquivo diretamente:

```bash
python3 -m http.server 8000
```

Depois, acesse <http://localhost:8000>. É necessária conexão com a internet para carregar Chart.js e Font Awesome pelas CDNs.

## Tecnologias

HTML5, CSS3, JavaScript ES modules e Chart.js.

## Próximos passos

- Streaks (dias seguidos)
- Modo escuro / claro
- Exportar e importar dados em JSON
- PWA (manifest e service worker)
