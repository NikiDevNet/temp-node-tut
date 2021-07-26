/* const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/subfolder/first.txt','utf8')
const second = readFileSync('./content/subfolder/second.txt','utf8')

// console.log(first, second)

writeFileSync(
    './content/subfolder/result-sync.txt', 
    `Here is the result: ${first} ${second}`,
    {flag: 'a'}
)

// 1:11min */

/* 
const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
    res.write('Here is our short history')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>`)

})

server.listen(5000)
 */
// 1:44min


//1:50

// npm - global command, comes with node
// npm -- version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// 2:20




const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems) 
console.log('hello Niki')