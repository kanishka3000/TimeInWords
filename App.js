const timeInWords = require('./timeInWords');


if(process.argv.length < 4){
    console.error("Syntax is node App.js <hour> <minute>");
    return;
}

const hour = parseInt(process.argv[2]);
const minute =  parseInt(process.argv[3]);



const time = timeInWords(hour, minute);
console.log(time);