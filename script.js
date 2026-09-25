//functions

//syntax
function nameForFunction() {
  console.log("Hello world");
}
nameForFunction();

//parametrar
function addNumber(a, b) {
  console.log(a + b);
}
addNumber("Hello", " World");

//Lägger till en variabel som håller summan
//returnerar ett värde med return
function addNumberVariable(a, b) {
  const item = a + b;
  return item;
}
addNumberVariable(5, 10);

const information = addNumberVariable(5, 10);
console.log(information);

function login(password) {
  if (password === "123") {
    return true;
  }
  return false;
}

function auth(password) {
  if (login(password)) {
    console.log("welcome to your profile");
  } else {
    console.log("restricted access");
  }
}

//Objects

const person = {
  namn: "Billy",
  age: 23,
  sayHello: function () {
    console.log("Hello! my name is " + this.namn);
  },
  isEmployed: true,
  family: ["Tanja", "Ted"],
};

person.sayHello();

person.isEmployed = false;
person.hasDog = true;

console.log(person.hasDog);

/*
Datatyper
Variabler
if-satser
loopar
array
obj
trycatch
*/

const namnSet = prompt("ANge namn");

console.log(namnSet.toUpperCase());
