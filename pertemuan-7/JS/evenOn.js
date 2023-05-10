let klik = document.querySelector('.btn')
let tes = () => {
    let a = parseInt(prompt('nilai 1'))
    let b = parseInt(prompt('nilai 2'))
    alert (a+'+'+b+'='+(a+b))
}
klik.onclick = tes;