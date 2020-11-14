 const cars = ["Mazda", "Ford", "BMW", "Mercedes"];

 const fib = [1, 1, 2, 3, 5, 8, 13];

 cars.push("Renault"); //Output: ["Mazda", "Ford", "BMW", "Mercedes", "Renault"]
 cars.unshift("Volvo"); //Output: ["Volvo", "Mazda", "Ford", "BMW", "Mercedes", "Renault"]

 const firstCar = cars.shift(); //Output: ["Mazda", "Ford", "BMW", "Mercedes", "Renault"]
 const lastCar = cars.pop(); //Output: ["Mazda", "Ford", "BMW", "Mercedes"]

 console.log('firstCar', firstCar); //Output: Volvo
 console.log('lastCar', lastCar); //Output: Renault
 console.log('revers', cars.reverse()); //Output:["Mercedes", "BMW", "Ford", "Mazda"]

 cars.includes("Mazda"); //Output: true
 cars.includes("Mazda!"); //Output: false

 const upperCaseCars = cars.map(car => car.toUpperCase());
 console.log('upperCaseCars', upperCaseCars); //Output: ["MERCEDES", "BMW", "FORD", "MAZDA"]
 console.log('cars', cars); //Output: ["Mercedes", "BMW", "Ford", "Mazda"]


 const pow2 = num => num ** 2;
 const pow2Fib = fib.map(pow2);
 console.log('pow2Fib', pow2Fib);

 //Aufgabe 1 Strign revers
 const text = "Hallo, wir lernen JavaScript!"
 const reversText = text.split("").reverse().join("");
 console.log('reversText', reversText); //Output: !tpircSavaJ nenrel riw ,ollaH

 // Array with Objects
 const people = [{
         name: "Artur",
         budget: 12300
     },
     {
         name: "Deni",
         budget: 10100
     },
     {
         name: "Michi",
         budget: 7800
     },
     {
         name: "Kati",
         budget: 1300
     }
 ]

 const index = people.findIndex(function (person) {
     return person.budget === 7800;
 })
 console.log('person with 7800', people[index]); //Output: {name: "Michi", budget: 7800}

 const person = people.find(function (person) {
     return person.budget === 7800;
 })
 console.log('person with 7800', person); //Output: {name: "Michi", budget: 7800}

 //Lambda Funktion
 const person2 = people.find(person => person.budget === 7800);
 console.log('person with 7800', person); //Output: {name: "Michi", budget: 7800}


 //----->>>> REDUCE!!!!

 const allBudget = people.reduce(function(acc, person) {
     if (person.budget > 10000)
        acc += person.budget;
     return acc;
 }, 0);
 console.log('allBudget', allBudget);

 const allBudget2 = people
    .filter(person => person.budget > 10000)
    .reduce(function(acc, person) {
        acc += person.budget;
        return acc;
}, 0);
 console.log('allBudget2', allBudget2);