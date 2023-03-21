let cek = true
let saldo = 0;

alert("selamat datang");
while(cek){
    let menu = prompt('MENU:\n 1.Cek saldo \n 2.Tarik Tunai\n 3.Setor Tunai');
    
    
    if (menu==1){
         alert('saldo anda'+" "+saldo);
        cek = confirm('lanjut?')
    }else if(menu==2){
        let tarik = prompt('mau tarik berapa?');
        if(saldo < tarik){ 
            alert('saldo anda menipis')
            cek = confirm('lanjut?')
        }else {
            saldo-=tarik
            alert('skarang saldo '+ saldo)
            cek = confirm('lanjut?')
        }
    }else if(menu==3){
        let ygmaudisetor =parseInt(prompt('masukkan jumlah yang mau di setor'))
        saldo += ygmaudisetor 
        alert ('saldo anda'+" "+saldo)
        cek = confirm ('masih ada keperluan?')
    }

}
    alert('terima kasih')