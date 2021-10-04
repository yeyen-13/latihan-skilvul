// Reverse Array
// ketentuan :

// membalikkan sebuah array
// Buat fungsi yang menerima parameter data array
// kembalikan dalam bentuk array
// Contoh

// [1,4,6,7] -> return [7,6,4,1]
// [7,4,2,1] -> return [1,2,4,7]
// [5] -> return [5]

let arr = [1, 4, 6, 7];
// cara manual
console.log(arr[3]);
console.log(arr[2]);
console.log(arr[1]);
console.log(arr[0]);

// agar mempermudah menggunakan looping
// i adalah variabel yang di buat dalam looping
// melakukan pengulangan 1- 10
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
// membalik angka yang di looping
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// menyelaikan soallatihan
// memasukkan kedlam array menggunakan . push

let newArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
  newArr.push(arr[i]);
}
console.log(newArr);

// memasukkan kodingan kedalam function
// parametr digunakan agar tidak susah mengubah inputan
function balikAngka(arr) {
  let newArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(balikAngka([1, 4, 6, 7]));
