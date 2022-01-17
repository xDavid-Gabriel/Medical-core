// Corazon 1
let circulo = document.getElementById("circulo");
let corazon = document.getElementById("pinta");

circulo.addEventListener("click", () => {
  corazon.classList.toggle("corazon-pintado");
});

corazon.addEventListener("click", () => {
  corazon.classList.toggle("corazon-pintado");
});

// Corazon 2

let circulo_2 = document.getElementById("circulo-2");
let corazon_2 = document.getElementById("pinta-2");

circulo_2.addEventListener("click", () => {
  corazon_2.classList.toggle("corazon-pintado-2");
});

corazon_2.addEventListener("click", () => {
  corazon_2.classList.toggle("corazon-pintado-2");
});
