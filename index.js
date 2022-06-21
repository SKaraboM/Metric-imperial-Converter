/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-para-el")
const volumeEl = document.getElementById("volume-para-el")
const massEl = document.getElementById("mass-para-el")

const convertBtn = document.getElementById("convert-btn")



function calcLength(input){
    let feet = (input * 3.281).toFixed(3)
    let meters = (input / 3.281).toFixed(3)
    lengthEl.textContent = `${input} meters = ${feet} feet | ${input} feet = ${meters} meters` 
}
function calcVolume(input){
    let gallons = (input * 0.264).toFixed(3)
    let liters = (input / 0.264).toFixed(3)
    volumeEl.textContent = `${input} Liters = ${gallons} gallons | ${input} gallons = ${liters} liters` 
    
}
function calcMass(input){
    let pounds = (input * 2.204).toFixed(3)
    let kilograms = (input / 2.204).toFixed(3)
    massEl.textContent = `${input} kilos = ${pounds} pounds | ${input} pounds = ${kilograms} kilos` 
    
}


convertBtn.addEventListener("click", function(){
    if(inputEl.value){
        calcLength(inputEl.value)
        calcVolume(inputEl.value)
        calcMass(inputEl.value)
    }
    else{
        console.log("no input")
    }
})

