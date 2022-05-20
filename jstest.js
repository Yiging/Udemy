// let name = prompt("請輸入您的姓名:");
// alert("Hello, " + name + "，這裡是昱青的第一個js");
// let name = prompt("請輸入您的姓名:");
// alert("Hello, " + name + "，這裡是昱青的第一個js");

// function example(…) {
//     return condition1 ? value1
//          : condition2 ? value2
//          : condition3 ? value3
//          : value4;
// }

// // Equivalent to:

// function example(…) {
//     if (condition1) { return value1; }
//     else if (condition2) { return value2; }
//     else if (condition3) { return value3; }
//     else { return value4; }
// }

let eatsAnimals = true;
let eatsPlants = false;
if (eatsAnimals === true && eatsPlants === false) {
  console.log("carnivore");
} else if (eatsAnimals === false && eatsPlants === true) {
  console.log("herbivore");
} else if (eatsAnimals === true && eatsPlants === true) {
  console.log("omnivore");
} else {
  console.log(undefined);
}
// function animal(
// ) {
//   return eatsPlants === true && eatsAnimals === false
//     ? "herbivore"
//     : eatsAnimals === true && eatsPlants === false
//     ? "carnivore"
//     : eatsAnimals === true && eatsPlants === true
//     ? "omnivore"
//     : "undefined";
// }
