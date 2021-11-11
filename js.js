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

let sumArr;//сумма каждого массива
let maxSum = [];//в этот новый массив запишутся все суммы массивов по порядку

for(let i = 0; i < arr.length; i++){
    sumArr = 0;
    for(let j = 0; j < arr.length; j++){
        sumArr += arr[i][j];//находим сумму массива
    }
    console.log(`Сумма чисел массива № ${i} равна ${sumArr}`);
    maxSum.push(sumArr);//добавляем новую сумму в конец массива сумм
}

const maxSumArr = Math.max(...maxSum);//находим в массиве сумм максимальную сумму
    for (let m = 0; m < maxSum.length; m++){
        if(maxSum[m] === maxSumArr){//вычисляем индекс массива с самой большой суммой чисел
            console.log(`Самый большой по сумме чисел массив с индексом ${m} имеет сумму всех чисел ${maxSumArr}`);
            console.log(Math.min(...arr[m]) + ' - самое маленькое число этого массива');
        }
    }

