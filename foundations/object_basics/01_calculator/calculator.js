const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arreglo) {
	return arreglo.reduce((acumulador, valorActual) => acumulador + valorActual,0);
};

const multiply = function(arreglo) {
 return arreglo.reduce((acumulador, valorActual) => acumulador * valorActual);
};

const power = function(base, exponente) {
	return base ** exponente;
};

const factorial = function(factorial) {
	let resultado = 1;
  for(let i = factorial; i > 0; i --){
    resultado *= i;
  }
  return resultado
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
