let person = {
  name: "John",
  age: 5,
  isVaccinate: true,
};
console.log(person);
person.age = 6;
console.log(person);
// person = {
//   isVaccinate: false,
//   name: "super jhon",
// };
// tidak diijinkan menggunakan const merubah menggunakan kurung kurawal karena di anggap mengubah semua

person.name = "super jhon";

// mengakses sebagian isi
console.log(person.age);
// delete objeck proprty
delete person.age;
console.log(person);

// membuat merhodan
const greting ={
    welcome: function() {
        return 'halo'
        
    }
    
}