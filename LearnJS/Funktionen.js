// 1. Funktionen

function greet (name) {
    console.log('Hello -s', name);
}


//===============================================================
// 2. Anonyme Funktionen
let counter = 0;
const interval = setInterval(function(){
    if (counter === 5) {
        clearInterval(interval);
    } else {
        console.log('counter', ++counter);
    }
}, 1000);


//===============================================================
// 3. Pfeilfunktion
// Standart
function greet (name) {
    console.log('Hello -', name);
}

//Pfeil
const arrow = (name) => {
    console.log('Hello -', name);
}
arrow();

const arrow2 = name => console.log('Hello -', name);
arrow2 ();


const pow2 = num => {
    return num ** 2;
}
console.log('sqrt pow2', pow2(5));


//===============================================================
// 4. Parameters by Defaull ECMA (2015)
const sum = (a, b) => a + b;
console.log('sum', sum(41)); //Output: NaN

const sum = (a = 42, b = 1) => a + b;
console.log('sum', sum()); //Output: 43
console.log('sum', sum(41)); //Output: 42
console.log('sum', sum(41, 4)); //Output: 45


// Rest Funktion  
function sumAll (...all) {
    console.log('sumAll', all);
}
sumAll(1, 2, 3, 4, 5, 6, 7); //Output: [1, 2, 3, 4, 5, 6, 7]

function sumAll2 (...all) {
    let result = 0;
    for (let num of all) {
        result +=num;
    }
    return result;
}
console.log('sumAll2', sumAll2(1, 2, 3, 4, 5, 6, 7)); //Output: 28


//===============================================================
// 5. Verschlüsse
function makeCounter() {
    var counter = 0;
    return {
        value: function () {
            return counter;
        },
        increment: function () {
            counter++;
        }
    }
}

let a = makeCounter();
let b = makeCounter();

a.increment();

console.log(a.value());//Output: 1
console.log(b.value());//Output: 0