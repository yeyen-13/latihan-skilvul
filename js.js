console.log("tes");

// tipe data number

let number1 = 12;
console.log(number1);

// tipe String(harus berada dalam '' , " ")

let number2 = "13";
console.log(number2);

console.log(number1 + number2);
// menjadi 1213

// tipe data Boolean tipe data yang mempunyai 2 nilai

// tipe data true /false

let benar = true;
console.log(benar);

let benar2 = "true";
console.log("benar");
console.log(benar + benar2);

// tipe data null = tidak memiliki nilai data
let data1 = null;
let data = "";

//  tipe data undefined= tipe data yang mempresntasikan variabel yang tidak memiliki nilai namun berbeda dengan null.atau sesuatu yang diluarkendali atau error

// tipe data objeck= data yang saling berhubungan mempunyai key dan value

const person = {
  nama: "yeyen",
  umur: 23,
  vaksin: true,
};

console.log(person);
console.log(person.nama);

// variabel=menyimpan data/mengupdate data
// 3 cara devinisi variabel
// 1. var (sudh tidak di pakai lagi)
// let( digunakan )
// const(data variabel yang tidak dapat di ubah)

let sisi = 100;
console.log(sisi);
persegi = 105;
let pi = 3.14;

// matematika
let angka = 100 + 1;
console.log(angka);
angka = angka + 1;
console.log(angka);

// modulus % sisa bagi
let angka3 = 100;
console.log("100" == angka3);
console.log("100" === angka3);

console.log("100" == angka3);

// // terdapat 3 variabel
let a = 10;
let b = 5;
let max = 0;
// // isi variabel max dengan nilai terbesar
a > b ? (max = a) : (max = b);
console.log(max);

let c = 20;
let d = 30;
console.log(c > d);
// }else if ( a < b){
console.log(c < d);
// }else(a == b){
console.log(c == d);
// }

let hari = 4;
switch (hari) {
  case 1: {
    console.log("hari senin");
    break;
  }
  case 2: {
    console.log("hari selasa");

    break;
  }
  case 3: {
    console.log("hari rabu");

    break;
  }
  case 4: {
    console.log("hari kamis");

    break;
  }
  case 5: {
    console.log("hari jumat");

    break;
  }

  default:
    {
      console.log("hati tidak ada");
    }
    break;
}
