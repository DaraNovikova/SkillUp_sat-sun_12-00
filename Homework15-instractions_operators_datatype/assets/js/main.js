console.log('Sample JavaScript HW#1');

/*
 * #1
 *
 * Создайте переменные со значениями
 */

// имя переменной: myNum, значение: 10
let myNum = 10;
console.log(myNum)
// имя переменной: myStr, значение: 'строка'
let myStr = 'строка';
console.log(myStr)
// имя переменной: myBool, значение: true
let myBool = true;
console.log(myBool)
// имя переменной: myArr, значения: 1, 2, 3, 4, 5
let myArr = [1, 2, 3, 4, 5]
console.log(myArr)
// имя переменной myObj, значения: first: 'First Name', last: 'Last Name'
let myObj = {
    first: 'First Name', 
    last: 'Last Name'
};
console.log(myObj)



/*
 * #2
 *
 * Отформатируйте целое число, которое хранится в переменной myNum,
 * чтобы получить результат с 2 знаками после запятой.
 * Результат сохраните в переменную decimal2.
 */

// decimal2

let decimal2 = myNum.toFixed(2);

console.log(decimal2)

/*
 * #3
 *
 * Создайте переменную i для которой выполните префиксный
 * и постфиксный инкремент и декремент.
 * Поэкспериментируйте с результатами, выводя их в консоль.
 */

let i = 10;
console.log(i++);
console.log(i);
i = 10;
console.log(i--);
console.log(i);
i = 10;
console.log(++i);
console.log(i);
i = 10
console.log(--i);
console.log(i);

/*
 * #4
 *
 * Создайте новую переменную myTest и присвойте ей значение 20.
 * Выполните присваивание с операцией, используя операторы: +=, –=, *=, /=, %=.
 * Результаты присваиваются в myTest, затем выводятся в консоль.
 * В вычислениях можно использовать объявленную ранее переменную myNum и/или числа.
 */

let myTest = 20;

myTest += myNum;
console.log(myTest);

myTest -= myNum;
console.log(myTest);

myTest *= 2;
console.log(myTest);

myTest /= 2;
console.log(myTest);

myTest %= 7;
console.log(myTest);

/*
 * #5
 *
 * Используя свойства и методы объекта Math, присвойте переменным и отобразите в консоли
 */

// константа Pi → myPi
let myPi = Math.PI;
console.log("константа Pi → myPi:", myPi);
// округленное значение числа 89.279 → myRound
let myRound = Math.round(89.279);
console.log("округленное значение числа 89.279 → myRound:", myRound);
// случайное число между 0..10 → myRandom
let myRandom = Math.round(Math.random()*10);
console.log("случайное число между 0..10 → myRandom:", myRandom);
// 3 в 5 степени → myPow
let myPow = Math.pow(3,5);
console.log("3 в 5 степени → myPow:", myPow);

/*
 * #6
 *
 * Создайте объект с именем strObj.
 * Присвойте ключу str строку текста "Мама мыла раму, рама мыла маму", ключу length установите длину этой строки.
 */


let strObj = {
    str : "Мама мыла раму, рама мыла маму"
};

strObj.length = strObj.str.length;

console.log(strObj);

/*
 * #7
 *
 * Проверьте наличие текста 'рама' в поле str объекта strObj (см.п.6),
 * результат сохраните в переменную isRamaPos и выведите ее в консоль.
 */

let isRamaPos = strObj.str.indexOf('рама');
console.log(isRamaPos)

/*
 * #8
 *
 * Выполните переименование подстроки в строке.
 * В качестве исходной строки используйте значение поля str объекта strObj (см.п.6), результат сохраните в переменную strReplace и отобразите в консоли.
 * Исходная строка: 'Мама мыла раму, рама мыла маму'
 *       Результат: 'Мама моет раму, Рама держит маму'
 */
let strReplace = strObj.str.replace('мыла', 'моет')
strReplace = strReplace.replace('рама', 'Рама');
strReplace = strReplace.replace('мыла', 'держит');
console.log(strReplace);

/*
 * #9
 *
 * Преобразуйте любую строку в верхний, затем в нижний регистры, результат отобразите в консоли.
 */

let upperCase = strObj.str.toUpperCase();
console.log(upperCase);
let lowerCase = upperCase.toLowerCase();
console.log(lowerCase);