const h1 = document.querySelector("h1");
const h3 = document.querySelector(".h3-content");
const info = document.querySelector("#info");

console.log(h1);
console.log(h3);
console.log(info);

h1.textContent = "byebye";
h3.textContent = "Information om något";
info.textContent = "Jag håller på med javascript för att manipulera dom:en";
h3.classList.add("color");

h3.classList.toggle("color");
h3.classList.toggle("color");

const main = document.querySelector("main");

const addText = document.createElement("p");

addText.textContent = "Ny text av information";
console.log(addText);

main.appendChild(addText);
