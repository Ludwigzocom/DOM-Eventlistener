const h1 = document.querySelector("h1");
console.log(h1);

h1.textContent = "Ludwigs hemsida";

const box = document.querySelector("#box");

box.classList.toggle("highlight");
box.classList.add("highlight");
box.classList.remove("highlight");
// box.classList.toggle("highlight");

const li = document.createElement("li");
li.textContent = "Michael";
const ul = document.querySelector("ul");

ul.appendChild(li);

const liRemove = document.querySelector("li");
const liAll = document.querySelectorAll("li");
liRemove.remove();

const unknown = document.querySelector(".name");
console.log(unknown);

box.style = "color: red; font-size: 2rem ";

const array = ["Tanja", "Jasmine", "Adam"];

for (const item of array) {
  const ele = document.createElement("li");
  ele.textContent = item;
  ul.appendChild(ele);
}
