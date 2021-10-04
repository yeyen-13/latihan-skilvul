// ubah suhu dari fahrenheit ke celcius
// rumus:(32 °F − 32) × 5/9 = 0 °C

function ubahSuhu(number) {
  return number - 32;
}
function konversi(fahrenheit) {
  return ubahSuhu(fahrenheit) * (9 / 5);
}

console.log(konversi(50));
