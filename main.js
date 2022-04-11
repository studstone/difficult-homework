'use strict';

const daysFirst = function () {
  const weekRu = 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'.split(',');
  const monthRu = 'января, февраля, марта, апреля,мая, июня, июля, августа, сентября, октября, ноября, декабря'.split(', ');
  const todayDay = new Date();
  let year = todayDay.getFullYear();
  let month = monthRu[todayDay.getMonth()];
  let data = todayDay.getDate();
  let day = +todayDay.getDay() - 1;
  let week = weekRu[day];
  let hour = todayDay.getHours();
  let minutes = todayDay.getMinutes();
  let seconds = todayDay.getSeconds();
  const fullDate = data + ' ' + month + ' ' + year + ' года ';
  let time = '';
  const divVariantFirst = document.getElementById('div-variant-first');


  const declinationHour = function (hour) {
    const str = 'час';
    if (hour === 1 || hour === 21) {
      return `${hour} ${str}`;
    }
    if (hour >= 2 && hour <= 4 || hour === 22 || hour === 23) {
      return `${hour} ${str}а`;
    }
    if (hour === 0 || hour >= 5 && hour <= 20) {
      return `${hour} ${str}ов`;
    }
  };

  const declinationMinutes = function (minutes) {
    const str = 'минут';
    if (minutes === 1 || minutes === 21 || minutes === 31 || minutes === 41 || minutes === 51) {
      return `${minutes} ${str}а`;
    }
    if (minutes >= 2 && minutes <= 4 || minutes >= 22 && minutes <= 24 || minutes >= 32 && minutes <= 34 || minutes >= 42 && minutes <= 44 || minutes >= 52 && minutes <= 54) {
      return `${minutes} ${str}ы`;
    }
    if (minutes === 0 || minutes >= 5 && minutes <= 20 || minutes >= 25 && minutes <= 30 || minutes >= 35 && minutes <= 40 || minutes >= 45 && minutes <= 50 || minutes >= 55 && minutes <= 60) {
      return `${minutes} ${str}`;
    }
  };

  const declinationSeconds = function (seconds) {
    const str = 'секунд';
    if (seconds === 1 || seconds === 21 || seconds === 31 || seconds === 41 || seconds === 51) {
      return `${seconds} ${str}а`;
    }
    if (seconds >= 2 && seconds <= 4 || seconds >= 22 && seconds <= 24 || seconds >= 32 && seconds <= 34 || seconds >= 42 && seconds <= 44 || seconds >= 52 && seconds <= 54) {
      return `${seconds} ${str}ы`;
    }
    if (seconds === 0 || seconds >= 5 && seconds <= 20 || seconds >= 25 && seconds <= 30 || seconds >= 35 && seconds <= 40 || seconds >= 45 && seconds <= 50 || seconds >= 55 && seconds <= 60) {
      return `${seconds} ${str}`;
    }
  };


  const declinationTime = function (hour, minutes, seconds) {
    time = declinationHour(hour) + ' ' + declinationMinutes(minutes) + ' ' + declinationSeconds(seconds) + ' ';
  };
  declinationTime(hour, minutes, seconds);

  if (day === -1) {
    day = 6;
    divVariantFirst.textContent = 'Сегодня ' + week + ', ' + fullDate + ', ' + time;
  } else {
    divVariantFirst.textContent = 'Сегодня ' + week + ', ' + fullDate + ', ' + time;
  }

  setInterval(daysFirst, 1000);
};

daysFirst();


const divVariantSecond = document.getElementById('div-variant-second');
const addZero = number => (number < 10) ? `0${number}` : number;
const daysSecond = function () {
  const todayDay = new Date();
  let year = todayDay.getFullYear();
  let monthNumber = todayDay.getMonth() + 1;
  let data = todayDay.getDate();
  let hour = todayDay.getHours();
  let minutes = todayDay.getMinutes();
  let seconds = todayDay.getSeconds();
  divVariantSecond.textContent = addZero(hour) + ':' + addZero(minutes) + ':' + addZero(seconds) + ' - ' + addZero(data) + '.' + addZero(monthNumber) + '.' + addZero(year);
  setInterval(daysSecond, 1000);
};
addZero();
daysSecond();