//Конструкція if...else
const lemonChicken = false;
const beefWithBlackBean = true;
const sweetAndSourPork = true;

if (lemonChicken) {
  console.log('Perfect');
} else if (beefWithBlackBean) {
  console.log('Okay, i will be Beef');
} else if (sweetAndSourPork) {
  console.log('Not bad Pork?');
} else {
  console.log('Fine, rice with egg confirm');
}

const name = 'Andrew';

if (name === 'Andrew') {
  console.log('Hi to me');
} else if (name === 'Michal') {
  console.log('Hi dad');
} else if (name === 'Olga') {
  console.log('Hi mom');
} else {
  console.log('Hi stranger');
}

//Цикл while
let sheepCounted = 0;
while (sheepCounted < 10) {
  console.log('Sheep counted: ' + sheepCounted + '!');
  sheepCounted++;
}
console.log('Hrrrrrr-psssssss');

//Цикл for
for (let sheepCount = 0; sheepCount < 10; sheepCount++) {
  console.log('Sheep is ' + sheepCount + '!');
}
console.log('FFfffff-pshhhhh');

const timeToSayHello = 3;
for (let i = 0; i < timeToSayHello; i++) {
  console.log('Hello!');
}

const animals = ['lion', 'flamingo', 'white bear', 'snake'];
for (let i = 0; i < animals.length; i++) {
  console.log('In this zoo we have ' + animals[i] + '!');
}

const nam = 'Andrew';
for (let i = 0; i < nam.length; i++) {
  console.log('In my name there is a letter ' + nam[i] + '.');
}

let x = 3;
while (x < 10000) {
  console.log(x);
  x = x * 3;
}

// Функції!!!
const ourFirstFunction = function () {
  console.log('Hello World');
};
ourFirstFunction();

const sayHelloTo = function (name) {
  console.log('Hello, ' + name + '!');
};

sayHelloTo('Andrew');
sayHelloTo('Svitlana');

// 1 аргумент
const drawCats = function (howManyTimes) {
  for (let i = 0; i < howManyTimes; i++) {
    console.log(i + ' =^-^=');
  }
};
drawCats(10);

//2 аргументи
const printMultipleTimes = function (howManyTimes, whatToDraw) {
  for (let i = 0; i < howManyTimes; i++) {
    console.log(i + '' + whatToDraw);
  }
};
printMultipleTimes(5, '*^_^*');

const double = function (number) {
  return number * 2;
};
double(3);

// Перший варіант
const randomBodyParts = ['nose', 'eye', 'skull'];
const randomAdjectives = ['stinky', 'ugly', 'gloomy'];
const randomWords = ['fly', 'monkey', 'stupid', 'ant', 'rat'];
const randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
const randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
const randomWord = randomWords[Math.floor(Math.random() * 5)];
const randomInsult =
  'You have ' +
  randomBodyPart +
  ' like ' +
  randomAdjective +
  ' ' +
  randomWord +
  '!!!';
randomInsult;

//Функція
const pickRandomWords = function (words) {
  return words[Math.floor(Math.random() * words.length)];
};

//Другий варіант
const randomBodyParts = ['nose', 'eye', 'skull'];
const randomAdjectives = ['stinky', 'ugly', 'gloomy'];
const randomWords = ['fly', 'monkey', 'stupid', 'ant', 'rat'];
const randomString =
  'You have ' +
  pickRandomWords(randomBodyParts) +
  ' like ' +
  pickRandomWords(randomAdjectives) +
  ' ' +
  pickRandomWords(randomWords) +
  '!!!';
randomString;

//Третій варіант (функція)
const generateRandomInsult = function () {
  const randomBodyParts = ['nose', 'eye', 'skull'];
  const randomAdjectives = ['stinky', 'ugly', 'gloomy'];
  const randomWords = ['fly', 'monkey', 'stupid', 'ant', 'rat'];
  const randomString =
    'You have ' +
    pickRandomWords(randomBodyParts) +
    ' like ' +
    pickRandomWords(randomAdjectives) +
    ' ' +
    pickRandomWords(randomWords) +
    '!!!';
  return randomString;
};
generateRandomInsult();

//Вихід з функції по return
const fifthLetter = function (name) {
  if (name.length < 5) {
    return;
  }
  return 'Fifth letter of my name is: ' + name[4] + '.';
};

//Infinity return
const medalForScore = function (score) {
  if (score < 5) {
    return 'Bronze';
  }
  if (score < 7) {
    return 'Silver';
  }
  return 'Gold';
};

//Довга версія функції
const double = function (number) {
  return number * 2;
};

//Коротка версія функції
function double(number) {
  return number * 2;
}

//SoftServe Education!!!!!!!!!!
// for цикл з лічильником
for (let i = 0; i < 100; i++) {
  console.log(i);
}

for (let i = 100; i > 0; i--) {
  console.log(i);
}

for (let i = 100; i > 100; i -= 2) {
  //i = i - 2
  console.log(i);
}

for (let i = 100; i > 0; i--) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// while цикл з передумовою
let i = 0;
while (i < 100) {
  console.log(i);
  i++;
}

let num = parseFloat(prompt('Enter a number!'));
while (Number.isNaN(num)) {
  num = parseFloat(prompt('Enter a number!'));
}
alert(num);

//do -while Цикл з постумовою
let num;
do {
  num = parseFloat(prompt('Enter a number!'));
} while (Number.isNaN(num));
alert(num);

//Arrays
let products = [];
products[0] = 'Nissan';
products[1] = 'Audi';
products[2] = 'Lexus';
products.push('Renault');
console.log(products[1]);
console.log(products.length);
console.log(products);

products.reverse();

for (i = 0; i < products.length; i++) {
  console.log(products[i]);
}

for (i = products.length - 1; i >= 0; i--) {
  console.log(products[i]);
}

//Виводим масив без undefined
products.forEach(printElement);
function printElement(el) {
  console.log(el);
}

//Крок 1 - Переносимо функцію в аргумент forEach
products.forEach(function printElement(el) {
  console.log(el);
});

//Крок 2 - видаляю ім'я (анонімна функція)
products.forEach(function (el) {
  console.log(el);
});

//Крок 3 - роблю стрілочну функцію
products.forEach(el => {
  console.log(el);
});

// Крок 4 - спрощую написання стрілочної функції
products.forEach(el => console.log(el));

products.sort();

//Сортування чисел
const nums = [1, 10, 22, 30, 400, 200, 11, 32, 50];
//компаратор - стрілочна функція для правильного сортування
nums.sort((a, b) => b - a);
console.log(nums);
