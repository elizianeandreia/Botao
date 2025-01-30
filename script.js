var entrarBtn = document.getElementById("entrarBtn");

var formPage = document.getElementById("formPage");
var idadeForm = document.getElementById("idadeForm");
var limparBtn = document.getElementById("limparBtn");


entrarBtn.addEventListener("click", function () {
  formPage.style.display = "block";
  formPage.classList.add('fadeIn'); 
});


idadeForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var idadeInput = document.getElementById("idade");
  var idade = idadeInput.value;

  if (idade) {
    alert("Obrigado por preencher a idade!");
  } else {
    alert("Por favor, preencha a sua idade.");
  }
);



limparBtn.addEventListener("click", function () {

  var idadeInput = document.getElementById("idade");
  idadeInput.value = ''; 
  formPage.style.display = "none"; 
});