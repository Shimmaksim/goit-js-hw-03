"use strict";
function countTotalSalary(employees) {
  let total = 0;
  for (const key of Object.values(employees)) {
    total += key;
  }
  return `зарплата всех сотрудников ${total}$`;
}

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
);

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150
  })
);
