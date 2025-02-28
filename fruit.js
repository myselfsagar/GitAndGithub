// -----------------Understanding DOM & getElementById Method------------------------------

let mainHeading = document.getElementById("main-heading");
mainHeading.textContent = "Fruit World";
mainHeading.style.color = "orange";

let header = document.getElementById("header");
header.style.backgroundColor = "green";
header.style.borderBottom = "3px solid orange";

let basketHeading = document.getElementById("basket-heading");
basketHeading.style.color = "green";

let thanks = document.getElementById("thanks");
thanks.innerHTML = "<p>Please visit us again</p>";

// -----------------getElementsByClassName Method------------------------------

const fruit = document.getElementsByClassName("fruit");
fruit[2].style.backgroundColor = "yellow";
for (let i = 0; i < fruit.length; i++) {
  fruit[i].style.fontWeight = "bold";
}

// -----------------getElementsByTagName Method------------------------------

const liItems = document.getElementsByTagName("li");
liItems[4].style.color = "blue";
for (let i = 0; i < liItems.length; i++) {
  liItems[i].style.fontStyle = "italic";
}

// ----------------querySelector & querySelectorAll Methods-------------------

// Write the code as shown in the video below:
const mainHeading = document.querySelector("#main-heading");
mainHeading.style.textAlign = "center";

const fruits = document.querySelector(".fruits");
fruits.style.backgroundColor = "gray";
fruits.style.padding = "30px";
fruits.style.margin = "30px";
fruits.style.width = "50%";
fruits.style.borderRadius = "5px";
fruits.style.listStyleType = "none";

let basketHeading = document.querySelector("h2");
basketHeading.style.marginLeft = "30px";

// QuerySelectorAll is used to grab all the elements with same class/tag
const fruitItems = document.querySelectorAll(".fruit");
for (let i = 0; i < fruitItems.length; i++) {
  fruitItems[i].style.backgroundColor = "white";
  fruitItems[i].style.padding = "10px";
  fruitItems[i].style.margin = "10px";
  fruitItems[i].style.borderRadius = "5px";
}

const oddFruitItems = document.querySelectorAll(".fruit:nth-child(odd)");
for (let i = 0; i < oddFruitItems.length; i++) {
  oddFruitItems[i].style.backgroundColor = "lightgray";
}

// Write answer to the questions asked below:
basketHeading = document.querySelector("#basket-heading");
basketHeading.style.color = "brown";

const evenFruitItems = document.querySelectorAll(".fruit:nth-child(even)");
for (let i = 0; i < evenFruitItems.length; i++) {
  evenFruitItems[i].style.backgroundColor = "brown";
  evenFruitItems[i].style.color = "white";
}
