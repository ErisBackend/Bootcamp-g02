//objeck
//variabel yang bisa menampung banyak variabel
//contoh object literal

// let data = {
//     nama : 'eris',
//     hoby : 'ngoding',
//     alamat : {
//         jln : 'jln terus',
//         rt : '1',
//         rw : '2'
//         },
//         makanan : ['bakso','mie','telor',{kuah : 'indomie',goreng : 'sedap'}],
//         greet : function(){
//             console.log('hallo dunia'+ this.nama)
//         } 

// }

// data.makanan = ['teh','kopi','jus']
// data.nama = 'risa nussy'

// console.log(data.nama,data.makanan[0])

// console.log(data.nama)
// console.log(data['nama'])
// console.log(data,nama,jnl)
// console.log(data.greet())
// console.log(data.makanan[0])
// console.log(data.alamat['jln'])
// console.log(data['alamat']['jalan'])
// console.log(data.makanan[3].kuah)
// console.log(data.alamat.jalan)
// console,log(data.makanan[3].goreng)

//funtion deklaration

// let data = function(nama,hoby){
//     let obj = {
    
//     }
//     obj.nama = nama
//     obj.hoby = hoby
//     return obj
// }
// let risa = data('risa','nonton')
// console.log(risa.nama)


//function destruction
// let Data = function(nama,hoby){
//     this.nama = nama
//     this.hoby = hoby
//     this.greet =function(){
//         return 'halo' + this. nama; //bisa di simpan di dalam prototype
//     }
//     Data.prototype.greet = function(){
//     return'halo saya' + this.nama;
//     }


//         // funsi di dalam object = method
//         // variable di dalam object = property

// }
// let pemain1 = new Data ('risa nusy','nonton')
// console.log(pemain1.greet())



// let Data = function(nama,hp,exp,lvl){
//     this.nama = nama 
//     this.hp = 100
//     this.exp = 0
//     this.lvl = 1

//     }

//     Data.prototype.serang = function(){
//         if(this.hp){

//         }


//     }


let Data = function(nama){
    this.nama = nama
    this.HP = 100
    this.exp = 0
    this.level = 1
}

Data.prototype.diserag = function(){
    this.HP -= 23 
    if(this.HP <= 0){
        return "mati"
    }
}
Data.prototype.serang = function(){
    this.exp += 13
    if(this.exp >=100){
        this.level+=1
        this.exp-=100
    }
   
}

    

    
let Risa = new Data()

console.log(Risa);

// Risa.diserag()
console.log(Risa.serang());


console.log(Risa);