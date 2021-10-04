// Ketentuan:

// menghitung total nilai yang terdapat pada sebuah array
// Buat fungsi yang menerima parameter data array
// kembalikan dalam bentuk number

function totals(number) {
  total = 0;
  for (let i = 0; i < number.length; i++) {
    total = total + number[i];
  }
  console.log(total);
  return total;
}
console.log(totals([8, 3, 9, 2, 5]));
