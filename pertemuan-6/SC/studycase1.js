let Game = function(nama){
    nama = nama
    hp = 100
    exp = 0
    lvl = 1
}

Game.prototype.diserang = function(){
    this.hp-=23
    if(this.hp<0){
        return 'mati'
    }
}

let Risa =new Game('risa')

console.log(Risa.diserag())