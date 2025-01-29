const entrarBtn = document.getElementById("entrarBtn") as HTMLButtonElement;

// Seleciona a área do formulário (inicialmente oculta)
const formPage = document.getElementById("formPage") as HTMLDivElement;

// Seleciona o formulário
const idadeForm = document.getElementById("idadeForm") as HTMLFormElement;

// Evento de clique no botão "Entrada"
entrarBtn.addEventListener("click", () => {
  // Mostra o formulário
  formPage.style.display = "block";
});

// Evento de envio do formulário
idadeForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita o comportamento padrão de envio do formulário

  // Pega a idade digitada
  const idadeInput = document.getElementById("idade") as HTMLInputElement;
  const idade = idadeInput.value;

  // Verifica se a idade foi preenchida
  if (idade) {
    alert("Obrigado por preencher a idade!");
  } else {
    alert("Por favor, preencha a sua idade.");
  }
});