// angka = 20;
// for (let angka = 1; angka <= 20; angka++) {
//   if (angka % 2 == 1) {
//     document.write("<br/>");
//     document.write("angka ganjil " + angka);
//   } else if (angka % 2 === 0) {
//     document.write("<br/>");
//     document.write("angka genap " + angka);
//   }
// }

for (let i = 0; i <= 20; i++) {
  i % 2 === 0
    ? document.write(" ,angka genap  " + i)
    : document.write("  ,angka ganjil  " + i);
}
