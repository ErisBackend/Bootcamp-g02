//ARRAY adalah sebuah variabel yang bisa menmapung lebih dari 1 data
//simol array []
// //contoh:

// let data=['a',1,'minum',1.5,true]  
//                                                 //artinya di dalalm variabel data ada berbgi macam tipe data
// console.log([0]);                                      //artinya memanggil data pada variabel data yg parametrnya 0
// console.log([1]);
// console.log([2]);
// console.log([3]);
// console.log([4]);

// data[0]= 'b'                                     //berarti data yang ada pada variabel data yang parametrnya nol di ganti dengan 'b'

let data=['a',1,'minum',1.5,true,['makan','minum']] 

// // console.log(data[0].length);

// // for(let i=0; i <= data.length;i++){
// //     console.log(data[1]);
// // }
for(let makan = 0; makan < data.length;makan++ ){
    console.log(data[5])
}