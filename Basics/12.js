// Write a JavaScript program to convert temperatures
// to and from Celsius, Fahrenheit.
//[ Formula : c/5 = (f-32)/9
// [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 
function tempC(Celsius){
    let celiusToF = ((9*Celsius) + 160)/5
    console.log(`${Celsius}°C is ${celiusToF}°F`)
}

function tempF(Fahrenheit){
    let fraToCelius = (5*Fahrenheit - 160)/9
    console.log(`${Fahrenheit}°F is ${fraToCelius}°C`)
}
tempC(60)
tempF(45)