/* 
По дате необходимо вернуть день недели
*/
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getDayOfWeak(date) {
  // getDay() возвращает день недели от 0 до 6
  return daysOfWeek[new Date(date).getDay()];
}

const dat = "03/07/2021";
const res = getDayOfWeak(dat);
console.log(res);
