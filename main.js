'use strict';
const week = new Map([
  [0, 'Понедельник'],
  [1, 'Вторник'],
  [2, 'Среда'],
  [3, 'Четверг'],
  [4, 'Пятница'],
  [5, 'Суббота'],
  [6, 'Воскресенье'],
]);


const div = document.getElementById('fordays');
const todayDay = new Date();
let day = +todayDay.getDay() - 1;


const days = function () {
  if (day === -1) {
    day = 6;

  }
  week.forEach((value, key, map) => {
    let newdiv = document.createElement('div');
    console.log(newdiv);

    if (key === day) {
      newdiv.classList.add('today');
      newdiv.textContent = value;
    }
    if (value == 'Суббота' || value == 'Воскресенье') {
      newdiv.classList.add('italic');
      newdiv.textContent = value;
    } else {
      newdiv.textContent = value;
    }
    div.appendChild(newdiv);
  });

};
days();