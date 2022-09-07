let homeCount = 0
let guestCount = 0

const incrementHome = document.getElementById("increment-home")
const incrementGuest = document.getElementById("increment-guest")
const add1PointForHome = document.getElementById("add1PointForHome")
const add2PointsForHome = document.getElementById("add2PointsForHome")
const add3PointsForHome = document.getElementById("add3PointsForHome")

const add1PointForGuest = document.getElementById("add1PointForGuest")
const add2PointsForGuest = document.getElementById("add2PointsForGuest")
const add3PointsForGuest = document.getElementById("add3PointsForGuest")

add1PointForHome.addEventListener("click", function(){
    homeCount++
    incrementHome.textContent = homeCount
})

add2PointsForHome.addEventListener("click", function(){
    homeCount += 2
    incrementHome.textContent = homeCount
})

add3PointsForHome.addEventListener("click", function(){
    homeCount += 3
    incrementHome.textContent = homeCount
})


add1PointForGuest.addEventListener("click", function(){
    guestCount++
    incrementGuest.textContent = guestCount
})

add2PointsForGuest.addEventListener("click", function(){
    guestCount += 2
    incrementGuest.textContent = guestCount
})

add3PointsForGuest.addEventListener("click", function(){
    guestCount += 3
    incrementGuest.textContent = guestCount
})