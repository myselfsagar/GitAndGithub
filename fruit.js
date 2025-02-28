// // -----------------Understanding DOM & getElementById Method------------------------------

// let mainHeading = document.getElementById("main-heading");
// mainHeading.textContent = "Fruit World";
// mainHeading.style.color = "orange";

// let header = document.getElementById("header");
// header.style.backgroundColor = "green";
// header.style.borderBottom = "3px solid orange";

// let basketHeading = document.getElementById("basket-heading");
// basketHeading.style.color = "green";

// let thanks = document.getElementById("thanks");
// thanks.innerHTML = "<p>Please visit us again</p>";

// // -----------------getElementsByClassName Method------------------------------

// const fruit = document.getElementsByClassName("fruit");
// fruit[2].style.backgroundColor = "yellow";
// for (let i = 0; i < fruit.length; i++) {
//   fruit[i].style.fontWeight = "bold";
// }

// // -----------------getElementsByTagName Method------------------------------

// const liItems = document.getElementsByTagName("li");
// liItems[4].style.color = "blue";
// for (let i = 0; i < liItems.length; i++) {
//   liItems[i].style.fontStyle = "italic";
// }

// // ----------------querySelector & querySelectorAll Methods-------------------

// // Write the code as shown in the video below:
// const mainHeading = document.querySelector("#main-heading");
// mainHeading.style.textAlign = "center";

// const fruits = document.querySelector(".fruits");
// fruits.style.backgroundColor = "gray";
// fruits.style.padding = "30px";
// fruits.style.margin = "30px";
// fruits.style.width = "50%";
// fruits.style.borderRadius = "5px";
// fruits.style.listStyleType = "none";

// let basketHeading = document.querySelector("h2");
// basketHeading.style.marginLeft = "30px";

// // QuerySelectorAll is used to grab all the elements with same class/tag
// const fruitItems = document.querySelectorAll(".fruit");
// for (let i = 0; i < fruitItems.length; i++) {
//   fruitItems[i].style.backgroundColor = "white";
//   fruitItems[i].style.padding = "10px";
//   fruitItems[i].style.margin = "10px";
//   fruitItems[i].style.borderRadius = "5px";
// }

// const oddFruitItems = document.querySelectorAll(".fruit:nth-child(odd)");
// for (let i = 0; i < oddFruitItems.length; i++) {
//   oddFruitItems[i].style.backgroundColor = "lightgray";
// }

// // Write answer to the questions asked below:
// basketHeading = document.querySelector("#basket-heading");
// basketHeading.style.color = "brown";

// const evenFruitItems = document.querySelectorAll(".fruit:nth-child(even)");
// for (let i = 0; i < evenFruitItems.length; i++) {
//   evenFruitItems[i].style.backgroundColor = "brown";
//   evenFruitItems[i].style.color = "white";
// }

// // ----------------Creating Elements & DOM Relations-------------------

// //createElement
// const subHeading = document.createElement("h3");
// //createTextNode
// const subHeadingContent = document.createTextNode(
//   "Buy high quality organic fruits online"
// );
// //appendChild
// const currentSubHeading = subHeading.appendChild(subHeadingContent);
// subHeading.style.fontStyle = "italic";
// const header = document.querySelector("#header");
// header.appendChild(subHeading);

// const divs = document.querySelectorAll("div");
// const secondDiv = divs[1];
// //createElement
// const totalFruitPara = document.createElement("p");
// //createTextNode
// const totalFruitContent = document.createTextNode("Total fruits: 4");
// //appendChild
// let totalFruit = totalFruitPara.appendChild(totalFruitContent);
// const ul = document.querySelector(".fruits");
// //insertBefore
// totalFruit = secondDiv.insertBefore(totalFruitPara, ul);
// totalFruit.setAttribute("id", "fruits-total");

// // ----------------Add & Delete Fruits-------------------

//Add & Delete Fruits
const form = document.querySelector("form");
const fruits = document.querySelector(".fruits");
const liItems = document.querySelectorAll("li");
liItems.forEach((liItem) => {
  // Create the edit button
  const editButton = document.createElement("button");
  editButton.className = "edit-btn";
  editButton.textContent = "edit";

  // Append the edit button after the delete button
  liItem.appendChild(editButton);
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const fruitToAdd = document.getElementById("fruit-to-add");

  const newLi = document.createElement("li");
  newLi.innerHTML =
    fruitToAdd.value +
    '<button class="delete-btn">x</button>' +
    '<button class="edit-btn">edit</button>';
  newLi.className = "fruit";

  fruits.appendChild(newLi);
});

fruits.addEventListener("click", (event) => {
  if (event.target.className === "delete-btn") {
    const fruitToDelete = event.target.parentElement;
    fruits.removeChild(fruitToDelete);
  }
});
