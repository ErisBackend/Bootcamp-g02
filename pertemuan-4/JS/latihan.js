let data = ['nol','satu','dua',['nol','satu'],'tiga']//tampilkanlah semua isi daari variabel data!!
for(let a = 0; a<data.length;a++){
    if(a===3){
        for(let b = 0; b<data[3].length;b++)
        console.log(data[3][b])
    }else
    console.log(data[a])
}

