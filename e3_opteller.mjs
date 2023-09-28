// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



// Voeg hier je eigen code in

let getal1 = parseFloat(await userInput.question('getal1: '))
let getal2 = parseFloat(await userInput.question('getal2: '))

let som = getal1 + getal2

console.log('de som is ' + som)

process.exit();