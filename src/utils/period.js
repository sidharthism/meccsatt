function getCurrentPeriodID() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var day = d.getDay();
  var perNum = -1;
  if (day == 5) {
    if (timeIsBetween(8, 30, 9, 10, d)) {
      perNum = 1;
    } else if (timeIsBetween(9, 10, 10, 0, d)) {
      perNum = 2;
    } else if (timeIsBetween(10, 0, 10, 50, d)) {
      perNum = 3;
    } else if (timeIsBetween(10, 50, 11, 40, d)) {
      perNum = 4;
    } else if (timeIsBetween(11, 40, 16, 0, d)) {
      perNum = 5;
    } else {
      perNum = 0;
    }
  } else {
    if (timeIsBetween(8, 30, 9, 20, d)) {
      perNum = 1;
    } else if (timeIsBetween(9, 20, 10, 20, d)) {
      perNum = 2;
    } else if (timeIsBetween(10, 20, 11, 20, d)) {
      perNum = 3;
    } else if (timeIsBetween(11, 20, 12, 20, d)) {
      perNum = 4;
    } else if (timeIsBetween(12, 20, 15, 30, d)) {
      perNum = 5;
    } else {
      perNum = 0;
    }
  }
  return perNum;
}

function timeIsBetween(h1, m1, h2, m2, timeOfDay) {
  let hn = timeOfDay.getHours();
  let mn = timeOfDay.getMinutes();
  if (
    ((hn === h1 && mn >= m1) || hn > h1) &&
    ((hn === h2 && mn < m2) || hn < h2)
  )
    return true;
  else return false;
}

// function isCurrentPeriod(time) {
//   let ta = time.split(" "); // Split string to array
//   let h1 = ta[0].slice(0, 2).replace(":", ""); // To get starting hr
//   let m1 = ta[0].replace(h1, "").replace(":", ""); // To get starting min
//   let h2 = ta[2].slice(0, 2).replace(":", ""); // To get ending hr
//   let m2 = ta[2].replace(h2, "").replace(":", ""); // To get ending min
//   return timeIsBetween(h1, m1, h2, m2);
// }

export { getCurrentPeriodID };
