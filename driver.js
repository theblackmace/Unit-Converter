const convertBtnEl = document.querySelector("#convert-btn")
let input = null;
let inputEl = document.querySelector("input")

convertBtnEl.addEventListener("click", function(){
    console.log("Convert Button clicked")
    input = inputEl.value
    console.log(input)
    renderLength(input)
    renderVolume(input)
    renderMass(input)
})

function renderLength(input){
    console.log("renderLength() called")
    const mtf = (3.28084*input).toFixed(3)
    const ftm = (input/3.28084).toFixed(3)

    document.querySelector("#len-el").textContent = `${input} meters = ${mtf} feet | ${input} feet = ${ftm} meters`
}

function renderVolume(input){
    console.log("renderVolume() called")
    const ltg = (0.264172*input).toFixed(3)
    const gtl = (3.78541*input).toFixed(3)

    document.querySelector("#vol-el").textContent = `${input} liters = ${ltg} gallons | ${input} gallons = ${gtl} liters`
}

function renderMass(input){
    console.log("renderMass() called")
    const ktp = (2.20462*input).toFixed(3)
    const ptk = (0.453592*input).toFixed(3)

    document.querySelector("#mass-el").textContent = `${input} kilos = ${ktp} pounds | ${input} pounds = ${ptk} kilos`
}