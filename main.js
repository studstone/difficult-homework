'use strict';

const num = 266219;
console.log(typeof num);
const splitNum = (num).toString().split("");
console.log(splitNum);
const productNum = splitNum.reduce((acc, rec) => acc * rec);
console.log(productNum);
const degreeNum = productNum ** 3;
console.log(String(degreeNum).slice(0, 2));

let lang = prompt('Какой язык используете на сайте?', 'ru/en');
const dayWeekRu = 'Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье';
const dayWeekEn = 'Monday , Tuesday , Wednesday , Thursday , Friday , Saturday , Sunday';
const title = 'sadfghfdsfghfjdsfgdhfjgdghfdfghjfdfghgjfdsfghfdfgfdsfgfd';

function getTitle(str) {
  if (typeof str !== 'string') {
    alert('аргумент не строка');
    return;
  }

  str = str.trim();
  return str.length > 30 ? str.slice(0, 30) + '...' : str;
}

if (lang === 'ru') {
  console.log(dayWeekRu);
} else if (lang === 'en') {
  console.log(dayWeekEn);
} else {
  console.log('Язык выбран некорректно');
}

switch (lang) {
  case 'ru':
    console.log(dayWeekRu);
    break;
  case 'en':
    console.log(dayWeekEn);
    break;
  default:
    console.log('Язык выбран некорректно');
    break;
}

lang = [
  ['Понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
];

console.log(lang[0]);
console.log(lang[1]);

let namePerson = prompt('Напишите имя', 'Имя');

(namePerson == 'Артем') ? console.log('Директор'):
  (namePerson == 'Александр') ? console.log('Преподаватель') : console.log('Cтудент');

console.log(getTitle(title));