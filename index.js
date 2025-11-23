let homePoints = document.getElementById("home_point")
let guestPoints = document.getElementById("guest_point")

let sumHome = 0
let sumGuest = 0

function home1Point(){
    console.log("The button is clicked.")
    sumHome += 1
    homePoints.innerText = sumHome
}

function home2Point(){
    console.log("The button is clicked.")
    sumHome += 2
    homePoints.innerText = sumHome
}

function home3Point(){
    console.log("The button is clicked.")
    sumHome += 3
    homePoints.innerText = sumHome
}

function guest1Point(){
    console.log("The button is clicked.")
    sumGuest += 1
    guestPoints.innerText = sumGuest
}

function guest2Point(){
    console.log("The button is clicked.")
    sumGuest += 2
    guestPoints.innerText = sumGuest
}

function guest3Point(){
    console.log("The button is clicked.")
    sumGuest += 3
    guestPoints.innerText = sumGuest
}