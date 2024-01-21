//Is the date today

function isToday(date) {
    let now = new Date();
  if (now.getFullYear() === date.getFullYear()  &&
      now.getMonth()    === date.getMonth() &&
      now.getDate()     === date.getDate()
     ) return true;
  return false;
}