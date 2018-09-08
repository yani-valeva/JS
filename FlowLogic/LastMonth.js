function getLastMonthDays(array) {
  let day = new Date();
  day.setFullYear(array[2], array[1] - 1, 0);
  console.log(day.getDate());
}

getLastMonthDays([13, 12, 2004]);