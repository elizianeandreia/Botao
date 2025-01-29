var entrarBtn = document.getElementById("entrarBtn");
// Seleciona a área do formulário (inicialmente oculta)
var formPage = document.getElementById("formPage");
// Seleciona o formulário
var idadeForm = document.getElementById("idadeForm");
// Evento de clique no botão "Entrada"
entrarBtn.addEventListener("click", function () {
    // Mostra o formulário
    formPage.style.display = "block";
});
// Evento de envio do formulário
idadeForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita o comportamento padrão de envio do formulário
    // Pega a idade digitada
    var idadeInput = document.getElementById("idade");
    var idade = idadeInput.value;
    // Verifica se a idade foi preenchida
    if (idade) {
        alert("Obrigado por preencher a idade!");
    }
    else {
        alert("Por favor, preencha a sua idade.");
    }
});
