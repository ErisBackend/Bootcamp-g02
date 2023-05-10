let n1 = 3
let n2 = 7
let n3 = 9
let n4 = 4
let n5 = 6
let n6 = 4

let SeluruhNilai = [n1,n2,n3,n4,n5,n6];

for (let i = 0; i < 3; i++) {

    let NilaiTerkecil = Math.min(...SeluruhNilai);
    let IndexTerkecil = SeluruhNilai.indexOf(NilaiTerkecil);
    SeluruhNilai.splice(IndexTerkecil,1);
}
    let total = 0;
        for(let i = 0; i< SeluruhNilai.length;i++){
            total += SeluruhNilai[i];
        }
        let ratarata = total /SeluruhNilai.length;




// console.log(SeluruhNilai);
console.log(ratarata);