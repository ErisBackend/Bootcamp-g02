// let data = (tes) => {
//     console.log("halo"+ tes) 
// }
//   data ('eris')


// let tes = () =>{
//     console.log('ha');
// }
// setInterval(tes,1000)
// let data = () => {
//     let nama = 'risa'
//     return function greet(){
//         return "helo"+ nama
//     }
// }
// let tes = data ()
// console.log(tes())

// let data = () => {
//     let nama = 'risa'
//     return function greet(){
//         return "helo"+ nama
//     }
// }
// let tes = data()
// console.log(tes())

let data = (nm) => {
    let nama = nm
    return function greet(inpt){
        return 'halo'+ nama+'nama saya'+ inpt
    }
}
let tes = data('dunia1');
console.log( tes('eris'))

// let data = (() => {
//         let nama = 'risa'
//         return function greet(){
//             return "helo"+ nama
//         }
//     })('dunia')
   
//     console.log(data('eris'))