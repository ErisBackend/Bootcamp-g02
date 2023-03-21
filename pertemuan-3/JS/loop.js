// perulangan
// DRY = dont repeat your self

// let tes = true
// while(tes){
//     console.log("tes");
//     tes = confirm("lanjut")
// }


let tes = ['ma','mi',['1','2']]
for(let i = 0; i< tes.length;i++){
    if(i===2){
        for(let  j= 0; j<tes.length;j++){
            console.log(tes[2][j])
        }
    }
     console.log(tes[2],[1])
}
// for(let i = 1; i<=10; i++){
//     console.log(i+'.tes');
// }

  