const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arreglo) {
	return arreglo.reduce((acumulador, valorActual) => acumulador + valorActual);
};

const multiply = function(arreglo) {
 return arreglo.reduce((acumulador, valorActual) => acumulador * valorActual);
};

const power = function(base, exponente) {
	return base ** exponente;
};

const factorial = function(factorial) {
	let producto = 0;
  for(let i = 0; i <= factorial; i--){
    producto *= i;
  }
  return producto;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
