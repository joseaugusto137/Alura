// método sort 

// let numeros = [1, 2, 3, 101, 20, 3, 30, 31, 40];
// numeros.sort();
// console.log(numeros);

var numeros = [1, 2, 3, 101, 20, 3, 30, 31, 40];
numeros.sort(function(a, b) {
  return a - b;
});
console.log(numeros);
