const days = {
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
  sat: 6,
  sun: 7,
};

function prevDay(today) {
  let pd = days[today] === 1 ? 7 : days[today] - 1;
  return Object.keys(days)[pd - 1];
}

function nextDay(today) {
  let nd = days[today] === 7 ? 1 : days[today] + 1;
  return Object.keys(days)[nd - 1];
}

export { prevDay, nextDay };
