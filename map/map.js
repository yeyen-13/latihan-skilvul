// apdate isi aray
let animal = ["cat", "dog", "tiger"];
console.log(animal);
animal[1] = "elevhen";
console.log(animal);
// .length = jumlah aray
console.log(animal.length);
// method aray
//
animal.push("chicken");
console.log(animal);

let filterAnimal = animal.filter((animals) => {
  return;
  animals.includes("a");
});
console.log(filterAnimal);
// .map
// let mapAnimal = animal.map((animal) =>{

// })
// const array = ["blastoff", 1, 2, 3];

// for (let index = array.length - 1; index >= 0; index--) {
//   const element = array[index];
//   console.log(element);
// }
// let a = [1, 4, 6, 7];
// for (let index = a.length - 1; index >= 0; index--) {
//   let b = a[index];
//   console.log(b);
// }
