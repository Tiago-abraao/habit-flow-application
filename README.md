
<div align="center">

# 🚀 HabitFlow

### 📊 Organize seus hábitos. Acompanhe seu progresso. Evolua todos os dias.

Aplicação web para gerenciamento e acompanhamento de hábitos, desenvolvida com **HTML5, CSS3 e JavaScript Vanilla**, utilizando uma arquitetura modular e gráficos interativos.

<br/>

![Status](https://img.shields.io/badge/Status-Em%20desenvolvimento-blue?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-orange?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)
![LocalStorage](https://img.shields.io/badge/LocalStorage-Storage-green?style=for-the-badge)
![No Framework](https://img.shields.io/badge/Framework-None-lightgrey?style=for-the-badge)

</div>

---

## 📌 Sobre o projeto

O **HabitFlow** é uma aplicação web desenvolvida para facilitar a criação, organização e acompanhamento de hábitos diários.

A proposta é oferecer uma experiência simples e intuitiva, permitindo que usuários acompanhem sua consistência, visualizem métricas e analisem sua evolução semanal.

O projeto foi desenvolvido utilizando JavaScript puro, sem frameworks ou bibliotecas de interface, priorizando organização, modularização e separação de responsabilidades.

## ✨ Funcionalidades

| Recurso | Descrição |
|---|---|
| 📝 Gerenciamento de hábitos | Criar e remover hábitos com nome e categoria. |
| ✅ Registro diário | Registrar hábitos concluídos e horário de conclusão. |
| 📅 Histórico semanal | Acompanhar os registros dos últimos sete dias. |
| 📊 Dashboard | Visualizar métricas e indicadores de desempenho. |
| 📈 Gráficos interativos | Acompanhar a evolução semanal com Chart.js. |
| 💾 Persistência local | Salvar automaticamente os dados no LocalStorage. |
| 📱 Responsividade | Interface adaptável a diferentes dispositivos. |

## 🏗️ Arquitetura do projeto

O HabitFlow utiliza uma arquitetura modular baseada na separação de responsabilidades, organizando a aplicação em componentes, serviços, utilitários e estilos.

```text
HabitFlow/
│
├── 📁 components/
│   └── Fragmentos HTML da aplicação
│
├── 📁 js/
│   ├── 📁 components/
│   │   ├── Carregamento de HTML
│   │   └── Componentes de interface
│   │
│   ├── 📁 services/
│   │   ├── Regras de gerenciamento de hábitos
│   │   ├── Manipulação de datas
│   │   └── Persistência de dados
│   │
│   ├── 📁 utils/
│   │   └── Funções auxiliares
│   │
│   └── 📄 main.js
│
├── 📁 styles/
│   ├── 📁 base/
│   │   └── Reset e estilos globais
│   │
│   ├── 📁 components/
│   │   └── Estilos dos componentes visuais
│   │
│   ├── 📁 layout/
│   │   └── Header, marca e sidebar
│   │
│   └── 📁 responsive/
│       └── Ajustes responsivos
│
└── 📄 index.html
```

### ⚙️ Decisões de engenharia

- 🧩 **Modularização:** divisão do código em módulos com responsabilidades específicas.
- 🏛️ **Separação de responsabilidades:** interface, serviços e utilitários independentes.
- 📦 **ES Modules:** utilização de módulos nativos do JavaScript.
- 🔄 **Carregamento dinâmico:** fragmentos HTML carregados por meio de `fetch`.
- 💾 **Persistência local:** armazenamento diretamente no navegador.
- 🛠️ **Manutenibilidade:** estrutura preparada para facilitar futuras implementações.

## 🧰 Stack tecnológica

<div align="center">

| Tecnologia | Finalidade |
|:---:|---|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | Estrutura da aplicação |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | Estilização e responsividade |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Lógica e funcionalidades |
| ![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat-square&logo=chartdotjs&logoColor=white) | Gráficos e métricas |
| ![LocalStorage](https://img.shields.io/badge/LocalStorage-Storage-green?style=flat-square) | Persistência de dados |
| ![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=flat-square&logo=fontawesome&logoColor=white) | Ícones |

</div>

## 🚀 Como executar

### 📋 Pré-requisitos

- Python 3 ou outro servidor HTTP local.
- Navegador moderno.
- Conexão com a internet para carregar bibliotecas externas pelas CDNs.

### 💻 Instalação

**1. Clone o repositório**

```bash
git clone https://github.com/Tiago-abraao/habit-flow-application
```

**2. Acesse o diretório**

```bash
cd habit-flow-application
```

**3. Inicie o servidor HTTP**

```bash
python3 -m http.server 8000
```

**4. Abra no navegador**

```text
http://localhost:8000
```

> ⚠️ **Atenção:** o projeto utiliza `fetch` para carregar fragmentos HTML. Portanto, é necessário executar a aplicação por um servidor HTTP local, não diretamente pelo protocolo `file://`.

## 💾 Persistência de dados

O projeto utiliza o `localStorage` para armazenar os hábitos diretamente no navegador.

**Chave de armazenamento:**

```javascript
@habit_tracker:habits
```

### 🔍 Características

- Armazenamento persistente entre sessões.
- Não necessita de API ou backend.
- Não necessita de banco de dados.
- Dados vinculados ao navegador e dispositivo utilizados.

> 💡 Atualmente, não existe sincronização entre dispositivos ou autenticação de usuários.

## 🗺️ Roadmap

Confira as próximas evoluções planejadas para o HabitFlow:

- [ ] 🔥 Sistema de streaks (dias consecutivos).
- [ ] 🌙 Alternância entre modo claro e escuro.
- [ ] 📤 Exportação de dados em JSON.
- [ ] 📥 Importação de dados em JSON.
- [ ] 📱 Suporte a Progressive Web App (PWA).
- [ ] ⚡ Implementação de manifest e service worker.
- [ ] 📊 Evolução dos indicadores de desempenho e consistência.

## 🧠 Conceitos aplicados

- Engenharia de Software.
- Arquitetura e organização de projetos.
- Separação de responsabilidades.
- JavaScript ES Modules.
- Manipulação do DOM.
- Persistência de dados.
- Desenvolvimento responsivo.
- Visualização de dados.

---

## 👨‍💻 Autores

<div align="center">

### Felipe Brito & Tiago Abraao

**Software Development | Engenharia de Software**

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/FelipeBritoSP10">
        <img src="https://github.com/FelipeBritoSP10.png" width="110px;" alt="Felipe Brito"/>
        <br />
        <b>Felipe Brito</b>
      </a>
      <br />
      <sub>👨‍🏫 Professor de Tecnologia</sub>
      <br />
      <sub>💻 Desenvolvedor Full Stack</sub>
      <br />
      <sub>🏗️ Engenheiro de Software</sub>
      <br /><br />
      <a href="https://github.com/FelipeBritoSP10">
        <img src="https://img.shields.io/badge/GitHub-FelipeBritoSP10-181717?style=flat-square&logo=github" />
      </a>
      <br />
      <a href="https://www.linkedin.com/in/felipe-brito-09a355285/">
        <img src="https://img.shields.io/badge/LinkedIn-Perfil-0A66C2?style=flat-square&logo=linkedin" />
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Tiago-abraao">
        <img src="https://github.com/Tiago-abraao.png" width="110px;" alt="Tiago Abraao"/>
        <br />
        <b>Tiago Abraao</b>
      </a>
      <br />
      <sub>💻 Software Developer</sub>
      <br /><br />
      <a href="https://github.com/Tiago-abraao">
        <img src="https://img.shields.io/badge/GitHub-Tiago--abraao-181717?style=flat-square&logo=github" />
      </a>
    </td>
  </tr>
</table>

</div>

---

<div align="center">

### 💡 Pequenos hábitos. Grandes resultados.

**HabitFlow — Desenvolvido em colaboração, com organização, tecnologia e propósito.** 🚀

</div>
