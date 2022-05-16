// Corazon 1
const circulo = document.getElementById("circulo");
const corazon = document.getElementById("pinta");

circulo.addEventListener("click", () => {
  corazon.classList.toggle("corazon-pintado");
});

corazon.addEventListener("click", () => {
  corazon.classList.toggle("corazon-pintado");
});

// Corazon 2

const circulo_2 = document.getElementById("circulo-2");
const corazon_2 = document.getElementById("pinta-2");

circulo_2.addEventListener("click", () => {
  corazon_2.classList.toggle("corazon-pintado-2");
});

corazon_2.addEventListener("click", () => {
  corazon_2.classList.toggle("corazon-pintado-2");
});
