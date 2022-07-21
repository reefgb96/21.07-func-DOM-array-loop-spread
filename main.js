"use strict";

//////------ Task 1 ------\\\\\\

const obj = {
  firstName: "Reef",
  lastName: "Goldberg",
};

const printFullName = (name, lName) => {
  //   const { name, lName } = { ...obj };
  console.log({ lName });
};
printFullName("Reef", "Goldberg");
// console.log({ ...obj });

//////------ Task 2 ------\\\\\\

const btn = document.querySelector("#button");
const title = document.querySelector("#title");

btn.addEventListener("click", () => (title.innerText = "You clicked"));

//////------ Task 3 ------\\\\\\
const submit = document.querySelector("#submit");
const input = document.querySelector("#input");
const arrList = document.querySelector("#list");

let animalArr = ["Dog", "Cat", "dolphin", "Tiger"];
arrList.innerHTML = `${[...animalArr]}`;

submit.addEventListener("click", () => {
  animalArr = [...animalArr, input.value];
  arrList.innerHTML = `${animalArr}`;
});

// console.log("Original array: ", animalArr);

// animalArr = [...animalArr, "Armadillo", "AXOLOTL"];
// console.log("After adding values: ", animalArr);

//////------ Task 4 ------\\\\\\

for (let i = 1; i < 11; i++) {
  for (let j = 1; j < 11; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

//////------ Task 5 ------\\\\\\

let table = document.querySelector("#table");
let output = "";

for (let i = 1; i < 11; i++) {
  output += "<tr>";
  for (let j = 1; j < 11; j++) {
    output += `<td>${i * j}</td>`;
    console.log(`${i} * ${j} = ${i * j}`);
  }
  output += "</tr>";
}
table.innerHTML = output;
