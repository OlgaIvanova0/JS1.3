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
}

//Задание 3 - Нарисовать горку с помощью console.log из 20 рядов
console.log('Задание 3');

for(let c = 1; c < 20; c++){
    let b = `x`;
    console.log(b.repeat(c));
}

//Задание 4*. С помощью цикла while вывести все простые числа от 0 до 100 (можно без оптимизаций).
console.log('Задание 4*');

let d = 0;
while (d <= 100) {
    const simple = d =>{
        if (d === 1 || d === 2 || d === 3 || d === 5 || d === 7){
            return true;
        } else if (d % 2 === 0 || d % 3 === 0 || d % 5 === 0 || d % 7 === 0){
            return false;
        } else {
            return true;
        }
    }; 
    if(simple(d) === true) {
        console.log(d);
    }
    d++;
}

/*Задание 5*:
1 Найти массив, у которого сумма всех чисел максимальна, вывести в console.log
индекс этого массива.
2 Получить и вывести в console.log минимальное значение найденное в массиве,
который мы получили в первом пункте.*/
console.log('Задание 5*');

const arr = [
    [2, 4, 6],
    [1, 5, 10],
    [7, 4, 1],
];

const arr1 = arr[0];
console.log('Массив №1 - ' + arr1);
let newSum1 = 0;
const sum1 = arr1 =>{
    for(i = 0; i < arr1.length; i++){
        newSum1 += arr1[i];
    }
    return newSum1;
};
console.log(`Сумма первого массива = ${sum1(arr1)}`);

const arr2 = arr[1];
console.log('Массив №2 - ' + arr2);
let newSum2 = 0;
const sum2 = arr2 =>{
    for(i = 0; i < arr2.length; i++){
        newSum2 += arr2[i];
    }
    return newSum2;
};
console.log(`Сумма второго массива = ${sum2(arr2)}`);

const arr3 = arr[2];
console.log('Массив №3 - ' + arr3);
let newSum3 = 0;
const sum3 = arr3 =>{
    for(i = 0; i < arr3.length; i++){
        newSum3 += arr3[i];
    }
    return newSum3;
};
console.log(`Сумма третьего массива = ${sum3(arr3)}`);

if(Math.max(sum1(arr1),sum3(arr3),sum2(arr2)) === sum2(arr2)){
    console.log('Второй массив самый большой');
    const minNumber = Math.min(...arr2);
    console.log(minNumber + ' - самое маленькое число этого массива');
} else if(Math.max(sum1(arr1),sum3(arr3),sum2(arr2)) === sum1(arr1)){
    console.log('Первый массив самый большой');
    const minNumber = Math.min(...arr1);
    console.log(minNumber + ' - самое маленькое число этого массива');
} else {
    console.log('Второй массив самый большой');
    const minNumber = Math.min(...arr3);
    console.log(minNumber + ' - самое маленькое число этого массива');
}






