"use strict";

//С помощью цикла do…while написать алгоритм для вывода чисел от 0 до 10 включительно
console.log('Задание 1');
let i=0;
do{
    if(i === 0){
        console.log(`${i} - это ноль.`);
    } else if(i % 2 === 0){
        console.log(`${i} - это четное число.`);
    } else {
        console.log(`${i} - это не четное число.`);
    }
    i++;
} while (i <= 10);

//задание 2 - Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла
console.log('Задание 2');
for(let a = 0 ; a < 10;console.log(a++)){   
};