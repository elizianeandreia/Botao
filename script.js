var entrarBtn = document.getElementById("entrarBtn");

var formPage = document.getElementById("formPage");

var idadeForm = document.getElementById("idadeForm");

entrarBtn.addEventListener("click", function () {

    formPage.style.display = "block";
});

idadeForm.addEventListener("submit", function (e) {
    e.preventDefault(); 
   
    var idadeInput = document.getElementById("idade");
    var idade = idadeInput.value;
  
    if (idade) {
        alert("Obrigado por preencher a idade!");
    }
    else {
        alert("Por favor, preencha a sua idade.");
    }
});
