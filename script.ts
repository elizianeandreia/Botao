const entrarBtn = document.getElementById("entrarBtn") as HTMLButtonElement;


const formPage = document.getElementById("formPage") as HTMLDivElement;


const idadeForm = document.getElementById("idadeForm") as HTMLFormElement;


entrarBtn.addEventListener("click", () => {

  formPage.style.display = "block";
});


idadeForm.addEventListener("submit", (e) => {
  e.preventDefault(); 


  const idadeInput = document.getElementById("idade") as HTMLInputElement;
  const idade = idadeInput.value;

  // Verifica se a idade foi preenchida
  if (idade) {
    alert("Obrigado por preencher a idade!");
  } else {
    alert("Por favor, preencha a sua idade.");
  }
});
