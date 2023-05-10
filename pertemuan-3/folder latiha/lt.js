// let makanan = ['nasi','jagung','ubi',['teh','jus']]

// for( let i = 0; i<makanan.length;i++){
//   if(i===0){
//     console.log(makanan[3][1])
//   }

// }
let n = 5;
let string = "";

for (let i = 1; i <= n; i++) {
for (let k = 0; k < i ; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
