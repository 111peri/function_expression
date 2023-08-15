// 1) На старте вы получаете массив. Необходимо написать функцию, которая будет возвращать массив удвоенных значений исходного массива.

//    Пример кода:
//    example([1, 2, 3]) => [2, 4, 6]
//    example([4, 1, 1, 1, 4]) => [8, 2, 2, 2, 8]
//    example([2, 2, 2, 2, 2, 2]) => [4, 4, 4, 4, 4, 4]


function numbersDouble(array) {
    const doubledArray = [];

    for (let i = 0; i < array.length; i++) {
        doubledArray.push(array[i] * 2);
    }

    return doubledArray;
}

const result1 = numbersDouble([1, 2, 3]); // [2, 4, 6]
const result2 = numbersDouble([4, 1, 1, 1, 4]); // [8, 2, 2, 2, 8]
const result3 = numbersDouble([2, 2, 2, 2, 2, 2]); // [4, 4, 4, 4, 4, 4]

console.log(result1);
console.log(result2);
console.log(result3);

// 2) Напишите функцию, которая заполняет новый массив предоставленным значением 
//    и затем ее возвращает. Функция должна первым параметром принимать 
//    элемент (значение для массива), вторым параметром размер массива.  
//    Например: myFunc('a', 3)   // ['a', 'a', 'a']



function createArrayWithValues(value, size) {
    const newArray = [];

    for (let i = 0; i < size; i++) {
        newArray.push(value);
    }

    return newArray;
}

// Примеры для использования
const result1 = createArrayWithValues('a', 3); // ['a', 'a', 'a']
const result2 = createArrayWithValues(0, 5); // [0, 0, 0, 0, 0]

console.log(result1);
console.log(result2);


//   3) Напишите функцию, которая принимает 2 числа и возвращает 1, если первое число больше, чем второе; -1, если первое число меньше, чем второе, и 0, если числа равны.
//    Попробуйте реализовать эту функцию не только с помощью if...else, но и с помощью тернарного оператора, и в виде стрелочной функции.

function compareNumbersWithIfElse(num1, num2) {
    if (num1 > num2) {
        return 1;
    } else if (num1 < num2) {
        return -1;
    } else {
        return 0;
    }
}