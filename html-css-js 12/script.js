/* false значения

false
0
"", '', ``
NaN
undefined
null

*/

// if(условие){ 
//     если условие верно 
// } else {     
//     в остальных случаях 
// }

let num = 15;

if (num < 10) {
    console.log('Число меньше десяти');
} else {
    console.log('Число больше десяти');
}

// -----------------------------------

let age;

// age = prompt("Сколько Вам лет?");
age = +age; // Аналог Number(age)

if (age > 18) {
    console.log("Добро пожаловать на сайт");
} else {
    if (age < 18) {
        console.log("Вам ещё рановато!");
    } else {
        console.log("Вы ввели не число!");
    }
}

// -----------------------------------

const accept = confirm("Вы принимаете условия?");

if(accept){
    alert("Cпасибо");
}


// -----------------------------------

let numberExample;

// numberExample = prompt("Введите только число!");

numberExample = +numberExample;

if(numberExample > 0){
    console.log("Положительное");
} else if(numberExample === 0){
    console.log("Это ноль!");
} else {
    console.log("Отрицательное");
}

let badExample = numberExample > 0? console.log("Положительное") : numberExample === 0? console.log("Это ноль!") : console.log("Отрицательное")

// условие? выражение1: выражение2

let ternar = 2 > 3? "yes" : "no";

let ternarExampleIf;
if(2 > 3){
    ternarExampleIf = "yes";
} else {
    ternarExampleIf = "no";
}                                   // Идентичны


// -----------------------------------

const userType = +prompt("Выберите число от 1 до 5!");

switch (userType){
    case 3:
        alert("Это цифра 3? Неплохо");
        break;
    case 5:
        alert("Это цифра 5? Ладно");
        break;
    case 4:
        alert("Это цифра 4? Замечательно");
        break;
    case 2:
    case 1:
        alert("Это цифра меньше двух? Настолько плохо?");
        break;
    default:
        alert("А почему не число?")
}
        
if(userType === 1 || userType === 2){ // Логическое или
    alert("Это цифра меньше двух? Настолько плохо?");
}
if(typeof userType === "number" && userType === 5){ // Логическое и
    alert("Это точно 5");
}

// -----------------------------------
// Приведение к boolean

let exampleBoolean1 = Boolean(1);
let exampleBoolean2 = !!1;
let f = +prompt("Введите положительное число!")

if(!f){ // Отрицание. Если был true, то false и наоборот  

    // Сюда подходят только false условия
    alert("Я просил положительное!")
}

// -----------------------------------

let i = 0;

while(i < 10){
    console.log("Квадрат числа " + i + " равен " + i*i); 
    i = i + 1; // Аналог i++;  
};

// -----------------------------------

let promptNumber;

while(!Number(promptNumber)){
    promptNumber = prompt('Введите число!')
}

// Первая итерация
promptNumber === undefined;
Number(promptNumber) === NaN; // false
!NaN === true
// Вторая итерация
promptNumber === "asdjhasjdhlkjasd";
Number(promptNumber) === NaN; // false
!NaN === true

promptNumber === 18;
Number(18) === 18; // true
!18 === false;

// Очень плохие моменты: 

while(true){ // Или while(любое всегда положительное)
    
}

while(false){ // он не сработает никогда

}

let itt = 0;

while(itt < 10){ // Мы не изменяем условие!
    console.log(itt);   
}

// -----------------------------------
// do while

do{
    console.log('hi!')
} while(15 < 10); // выполнится хотя бы однажды

// -----------------------------------


for(let i = 0; i < 10; i++){
    if(i % 2 !== 0){ // Пропускает лишь нечетные
        // остаток от деления нечетного на 2 === 1
        // 1 !== 0
        continue // Перейдет на следующий круг.
    }

    console.log(i)
} 
// Если делится без остатка - 0

let variable = 0;

while(true){
    console.log(variable)
    if(variable === 10){ // условие
        continue;  // ЗАКАНЧИВАЕТ выполнение цикла
    }
    variable++;    // увеличивает на один
}

for(let i = 0; i < 10; i++){ // 10 раз выполняется цикл
    let str = ""; // создается пустая строка 
    for(let j = 0; j < 10; j++){ // 10 раз выполняется цикл
        str = str + "*"; // Каждый раз добавит * к str
    } 
    console.log(str) // Выведется на экран
}


for(let i = 0; i < 10; i++){ // 10 раз выполняется цикл
    let str = ""; // создается пустая строка 
    for(let j = 0; j + i < 10; j++){ // В 5 цикле i  у нас будет 5 выполнений
        str = str + "*"; // Каждый раз добавит * к str
    } 
    console.log(str) // Выведется на экран
}