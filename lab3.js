//	1
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', function(line){
    lines.push(line);
});

rl.on('close', () => {
    // тут ваше решение
    result = lines[0]						// 0 элемент lines
        .split(' ')							// разбиваем его по элементу ' ' пробел
        .map( item => Number(item))			// преобразуем каждый элемент в число
        .filter(item => item%2 == 0)[0];	// фильтруем по чётности
             
    console.log(result);
});


//	2
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', function(line){
    lines.push(line);
});

rl.on('close', () => {
    // тут ваше решение не использовать for while if
    result = lines[0]
        .split(' ')								// разбиваем lines по элементу ' ' пробел
        .map(item => Number(item))				// преобразуем каждый элемент в число
        .filter(item => item%2 != 0)			// фильтруем по чётности
        .reduce((acc, cur) => acc + " " + cur);	// методом reduce складываем текущий элемент и прошлый
    console.log(result);
});


//	3
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', function(line){
    lines.push(line);
});

rl.on('close', () => {
    // тут ваше решение не использовать for while if
    result = lines[0]
        .split(' ')
        .map(item => Number(item))
        .sort((a, b) => b -a)						// сортируем в порядке убывания
        .reduce((acc, cur) => acc + " " + cur);
    console.log(result);
});


//	4
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', function(line){
    lines.push(line);
});

rl.on('close', () => {
    // тут ваше решение не использовать for while if
    result = lines[0]
        .split(' ')
        .map(item => Number(item))
        .sort((a, b) => a - b)						// сортируем в порядке возрастания
        .slice(0,3)									// оставляем в массиве элементы с 0 по 3  
        .reduce((acc, cur) => acc + cur);
    console.log(result);
});


//	5
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', function(line){
    lines.push(line);
});

rl.on('close', () => {
    let n = Number(lines[0]);									// узнаём колличество введённых элементов
    console.log(
        lines
            .slice(1)											// начинаем массив с 1 элемента
            .map((item) => Number(item.split(' ')[0]))			// преобразуем строку в массив по разделителю пробел
            .filter(item => item % 10 == 3 || item % 10 == -3)	// фильтруем по делимости на 3
            .sort((a, b) => a - b)[0]							// сортируем в порядке возрастания
    );
});