
function kalkulator(){
    alert('kalkulator rungkad')
    let a = parseInt(prompt('masukkan angka pertama'))
    let b = parseInt(prompt('masukkan angka2'))
    let c = parseInt(prompt('1.Tambah\n 2.kurang\n 3.kali\n 4.bagi\n 5.modulus'))

    if (c == 1){
       
        hasil=a+b
        alert(hasil)
        let lanjut =prompt('lanjut gk?(y atau n)')
        if (lanjut == 'y'){
            return kalkulator()   
        }else {
            return kalkulator
        }
    }else if(c == 2){
        hasil=a-b
        alert(hasil)
        let lanjut=prompt('gas lagi?(y atau n)')
        if(lanjut == 'y'){
            return kalkulator()
        }
    }else if(c==3)  {
        hasil=a*b
        alert(hasil)
        let lanjut=prompt('gas aja!!! (y atau n)')
        if(lanjut == 'y'){
            return kalkulator()
        }
    }else if(c==4){
        hasil=a/b
        alert(hasil)
        let lanjut=prompt('pecahkan!!! (y atau n)')
        if(lanjut=='y'){
            return kalkulator()
        }else{
   }

    }
    
}
kalkulator()