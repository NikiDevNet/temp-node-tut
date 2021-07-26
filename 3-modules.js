/* const amount = 12

if(amount < 10){
    console.log('small number');
}else{
    console.log('large number')
}
console.log(`hei it's my first node app!!!`) */




// Globals - No window !!!

//__dirname - path to current directory
//__filename - file name
// require - function to use modules(CommonJS)
// module - info abount current module(file)
// process - info about env the program is being executed
/* 
console.log(__dirname);
setInterval(() => {
    console.log('hello world')
}, 1000);
 */

// 28:14


// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')
require('./7-mind-grenade')
console.log(data)
// console.log(names)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter) 