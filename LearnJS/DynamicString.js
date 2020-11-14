function logPerson (s, name, age) {
    if (age < 0 ) {
        age = "ist noch nicht geboren"
    }
    //console.log('logPerson', s, name, age);
    return `${s[0]}${name}${s[1]}${age}${s[2]}`;
}

const persName = "Artur"
const persAge = 28
const output = logPerson`Name: ${persName}, Alter: ${persAge}!`

console.log('logPerson2 ', output); //Output: Name: Artur, Alter: 28!

