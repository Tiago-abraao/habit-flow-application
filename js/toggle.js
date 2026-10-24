const toggle = document.querySelector('.toggle');
const icon = toggle.querySelector('.material-symbols-outlined');
const list = document.querySelector('.links-list');



// Função para abrir/fechar o menu e trocar o ícone
function toggleMenu() {
  const isOpen = list.classList.toggle('open');
  
  // Atualiza a acessibilidade
  toggle.setAttribute('aria-expanded', isOpen);
  
  if (isOpen) {
    toggle.setAttribute('aria-label', 'Fechar menu');
    icon.textContent = 'close'; // Troca o ícone de 3 barras para o "X"
  } else {
    toggle.setAttribute('aria-label', 'Abrir menu');
    icon.textContent = 'menu';  // Volta para o ícone de 3 barras
  }
}

// Escuta o clique no botão
toggle.addEventListener('click', toggleMenu);

// Fecha o menu se apertar "Esc"
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && list.classList.contains('open')) {
    toggleMenu();
    toggle.focus();
  }
});
