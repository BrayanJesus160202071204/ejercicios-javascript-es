# Ejercicio 1 - Factorial

Escribe una función **recursiva** de [factorial](https://simple.wikipedia.org/wiki/Factorial) que reciba un entero no negativo y devuelva el producto de todos los enteros positivos menores o iguales que él. Si recibe `0`, debe devolver `1`. La función solo debe aceptar valores de tipo numérico: `'4'` no es válido porque es una cadena. Toda entrada no válida debe devolver `undefined`.

Por ejemplo:

```javascript
factorial(5); // 5 * 4 * 3 * 2 * 1, resultado: 120
factorial(0); // resultado: 1
factorial(7.2); // resultado: undefined
factorial('4'); // resultado: undefined
```
