// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



// Voeg hier je eigen code in
let name = await userInput.question('wat is je naam ? ')

let age = await userInput.question('hoe oud ben je ? ')

let favoriteGame = await userInput.question('wat is je favorite spell ? ')


console.log('Hallo '+ name +', ik hoor dat je '+ age +' jaar oud bent en dat je lievelingsgame '+ favoriteGame +' is.');

process.exit();