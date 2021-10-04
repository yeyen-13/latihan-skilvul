let kompirPesan = 0;
let pesan;
do {
  pesan = confirm("Apakah anda mau mengulang ?");

  if (pesan === true) {
    kompirPesan++;
  }
} while (pesan === true);
alert(`Perulangan sudah dilakukan sebanyak ${kompirPesan}`);
