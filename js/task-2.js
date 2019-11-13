"use strict";

// const countProps = { mail: "poly@mail.com", isOnline: true, score: 500 };

function countProps(obj) {
  return Object.values(obj).length;
}

console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
