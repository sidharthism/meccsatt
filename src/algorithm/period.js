function getPeriodID() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var day = d.getDay();
    var perNum=-1;
    if (day == 5) {
        if (timeIsBetween(8, 30, 9, 10, d)) {
            perNum = 1;
        } else if (timeIsBetween(9, 10, 10, 00, d)) {
            perNum = 2;
        } else if (timeIsBetween(10, 00, 10, 50, d)) {
            perNum = 3;
        } else if (timeIsBetween(10, 50, 11, 40, d)) {
            perNum = 4;
        } else if (timeIsBetween(11, 40, 16, 00, d)) {
            perNum = 5;
        } else {
            perNum = 0;
        }
    } else {
        if (timeIsBetween(8, 30, 9, 30, d)) {
            perNum = 1;
        } else if (timeIsBetween(9, 30, 10, 30, d)) {
            perNum = 2;
        } else if (timeIsBetween(10, 30, 11, 30, d)) {
            perNum = 3;
        } else if (timeIsBetween(11, 30, 12, 30, d)) {
            perNum = 4;
        } else if (timeIsBetween(12, 30, 15, 30, d)) {
            perNum = 5;
        } else {
            perNum = 0;
        }
    }
    return perNum;   
}

function timeIsBetween(h1,m1,h2,m2,timeOfDay) {
    var hn = timeOfDay.getHours();
    var mn = timeOfDay.getMinutes();
    if (((hn == h1 && mn >= m1) || hn > h1) &&
        ((hn == h2 && mn < m2) || hn < h2)) {
      return true;
    } else {
      return false;
    }
}

console.log(getPeriodID());
