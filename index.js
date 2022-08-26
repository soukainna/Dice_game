var rand1 = Math.floor(Math.random() * 6) + 1
var rand2 = Math.floor(Math.random() * 6) + 1
var h = document.querySelector("h1")
console.log(rand1, rand2)

const p1 = document.querySelector(".img1")
const p2 = document.querySelector(".img2")
// var tab = []

// for(i = 0; i < 6; i++){

//     tab[i] = document.createElement('img')
// }

// if (rand1 > rand2){
//     p1.ap
// }
p1.setAttribute("src", `./images/dice${rand1}.png`)
p2.setAttribute("src", `./images/dice${rand2}.png`)

if (rand1 > rand2){
    h.innerHTML = "🚩 Player 1 Wins!"
}
else if (rand1 < rand2){
    h.innerHTML = "Player 2 Wins! 🚩"
}
else {
    h.innerHTML = "Draw!"
}