let data = [];
cek = true
while (cek) {
    let input = prompt("masukkan kata");
    
    data.push(input);
    
    cek = confirm('ada lagi yang lain?')
    console.log(data);
}
alert("terima kasih")

