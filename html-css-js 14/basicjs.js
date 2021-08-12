/* JS 03 array basic methods */

// Hometask 01


let tempCelsius = [-3.5, -3, 1.8, 9.3, 15.5, 18.5, 20.5, 19.7, 14.2, 8.4, 1.9, -2.3]

let tempFahrenheit = tempCelsius.map(function(temp) {
    return Math.round(temp * 9 / 5 + 32)
})

console.log(tempFahrenheit)



// Hometask 02


let positiveTempCelsius = tempCelsius.filter(function(temp) {
    return (temp > 0)
})
console.log(positiveTempCelsius)



// Hometask 03 (не разобрался)


let yearlyCelsiusAverage = tempCelsius.reduce(function(temp, amount) {
    return ((temp + amount) / tempCelsius.length)
}, 0)
console.log(yearlyCelsiusAverage)



// Hometask 04


