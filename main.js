'use strict';
const weekRu = 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'.split(',');
const monthRu = 'января, февраля, марта, апреля, мая, июня, июля, августа, сентября, октября, ноября, декабря'.split(',');

const todayDay = new Date();
let year = todayDay.getFullYear();
let month = monthRu[todayDay.getMonth()];
let monthNumber = todayDay.getMonth() + 1;
let day = +todayDay.getDay() - 1;
let week = weekRu[day];
let data = todayDay.getDate();
let hour = todayDay.getHours();
let minutes = todayDay.getMinutes();
let seconds = todayDay.getSeconds();
const fullDate = data + ' ' + month + ' ' + year + ' года ';
let time = '';
const divVariantFirst = document.getElementById('div-variant-first');

const declinationTime = function () {
  if (hour === 1 || hour === 21) {
    time = hour + ' час ' + minutes + ' минут ' + seconds + ' секунд';
  }
  if (hour >= 2 || hour <= 4 || hour === 22 || hour === 23) {
    time = hour + ' часа ' + minutes + ' минут ' + seconds + ' секунд';
  }
  if (hour === 0 || hour >= 5 || hour <= 20) {
    time = hour + ' часов ' + minutes + ' минут ' + seconds + ' секунд';
  }
};

const days = function () {
  if (day === -1) {
    day = 6;
    divVariantFirst.textContent = 'Сегодня ' + week + ', ' + fullDate + ', ' + time;
  } else {
    divVariantFirst.textContent = 'Сегодня ' + week + ', ' + fullDate + ', ' + time;
  }
  setTimeout(days, 1000);
};

declinationTime();
days();


const divVariantSecond = document.getElementById('div-variant-second');

const addZero = function () {
  if (hour <= 9) {
    hour += '0' + hour;
  }
  if (minutes <= 9) {
    minutes = '0' + minutes;
  }
  if (seconds <= 9) {
    seconds = '0' + seconds;
  }
  if (data <= 9) {
    data = '0' + data;
  }
  if (monthNumber <= 9) {
    monthNumber = '0' + monthNumber;
  }
  divVariantSecond.textContent = hour + ':' + minutes + ':' + seconds + ' - ' + data + '.' + monthNumber + '.' + year;
  // setTimeout(addZero, 1000);
};
addZero();