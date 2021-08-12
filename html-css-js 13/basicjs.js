/* Arrays */

// task 01


let favorMovies = ["Inception"]
console.log(favorMovies)
favorMovies[1] = "Venom"
console.log(favorMovies)
favorMovies.push("Tor")
console.log(favorMovies)


// task 02


let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"]
console.log(planets)
planets.pop()
planets.forEach(planet => console.log(planet))


// task 03


let planetsReversed = planets.reverse()
console.log(planetsReversed)


// task 04


function cloneArr(arr) {
    return (arr.slice(0))
}


// task 05


let drinks = ["water", "tea", "coke", "coffee", "beer", "lemonade"]
let todayDrinks = drinks.slice(1)
console.log(drinks)
console.log(todayDrinks)


// task 06


function double(a) {
    let result = a * 2
    console.log(result)
}
double(25)


// task 07


function bye() {
    let name = prompt("Как Вас зовут?")
    alert(`До свидания, ${name}!`)
}

bye()


// task 08 не знаю, могу посмотреть, как делают в инете


function percentsDepositCalc(sum, percent, term) {
    return
}


// task 09 не знаю, могу посмотреть, как делают в инете