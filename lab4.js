const _ = require('lodash'); 				// подключаем библиотеку lodash 

const colors = require('./colors.json');	// подключаем файл с цветами

// Задание 1
// let res = _(colors)						// нижнее подчёркивание обозначает использование lodash
//         .map(x => Object.keys(x)[0])		// берём ключ
//         .filter(x => x.length <= 6)		// фильтруем по длине не более 6 символов
//         .orderBy()						// сортируем в порядке возрастния
//         .value();						// возвращаем массив значений

// console.log(res);						// выводим результат


// Задание 2

let res = _(colors)
    .map(a => ({ color: Object.keys(a)[0], rgb: Object.values(a)[0].slice(0,3) }))  // преобразуем элементы json к виду color: ключ rgb: значение без прозрачности
    .sortBy('color')						// сортируем по цвету
    .value();

console.log(res);
