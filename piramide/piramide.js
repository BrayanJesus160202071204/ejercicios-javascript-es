const LatasEnPiramide = function(filas) {
	let total = 0;
  for(let i = 0; i <= filas; i++){
    total += i;
  }
  return total;
};
console.log(LatasEnPiramide(0));
console.log(LatasEnPiramide(1));
console.log(LatasEnPiramide(4));
console.log(LatasEnPiramide(10));