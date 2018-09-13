"use strict"

let time = new Date()

let hour = time.getHours()
let min = time.getMinutes()
let second = time.getSeconds()

let currentTime = `time is now ${hour} : ${min} : ${second}`

function buttonHandler(){

    let time = new Date()

    let hour = time.getHours()
    let min = time.getMinutes()
    let second = time.getSeconds()
    
    let currentTime = `time is now ${hour} : ${min} : ${second}`
    
    document.getElementById("content").innerHTML = currentTime
    
}

document.getElementById("content").innerHTML = currentTime    
document.getElementById("button").addEventListener("click", buttonHandler)