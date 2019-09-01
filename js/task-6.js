"use strict";
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];
//Напиши функцию calculateTotalPrice(arr, productName), которая получает массив объектов и имя продукта (значение свойства name). Возвращает общую стоимость продукта (цена * количество).

const calculateTotalPrice = function(arr, productName) {
  let total = 0;
  for (const user of arr) {
    if (user.name === productName) {
      total = user.price * user.quantity;
    }
  }
  return total;
};

console.log(calculateTotalPrice(products, "Радар"));

console.log(calculateTotalPrice(products, "Дроид"));
