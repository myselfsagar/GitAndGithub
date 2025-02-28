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
