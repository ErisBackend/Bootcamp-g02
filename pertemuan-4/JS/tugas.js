// let bintang = 0;
// let string = "";

// for (let i = 1; i <= bintang; i++) {
//   // untuk mengatur jarak
//   for (let j = 1; j <= bintang - i; j++) {
//     string += " ";
//   }
//   // nge-print bintangnya
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);


let bintang = 1;
let string =""

for (let i = 0; i < bintang; i++) {//i = 0 i lebih kecil dari 4 cetak i sampai 4 kali

// //   // nge-print bintangnya
  for (let k = 0; k <= i ; k++) {//k lebih kecil atau sama dengan 0 cetak k 0 kali
    string += "b";
  }
  string += "\n";
}
console.log(string);
