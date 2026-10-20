# Ejercicio 03 - numberChecker

Modifica el código para que devuelva `true` cuando el número sea mayor o igual que 10, y `false` cuando sea menor que 10.

Actualmente, el código devuelve `true` cuando el número es `6`; en cualquier otro caso devuelve `false`.

Quizá notes que este ejercicio tiene varias pruebas (en `numberChecker.spec.js`). Al principio solo está habilitada la primera. Cuando logres superarla, habilita la siguiente eliminando `.skip` de `test.skip()`. Suele ser más fácil habilitar una prueba a la vez y modificar el código hasta superarla. Continúa así hasta que todas las pruebas se superen.

Si `npm test numberChecker.spec.js` muestra un resultado similar al siguiente, significa que todavía hay pruebas omitidas. Asegúrate de habilitarlas como se explicó:

```
Test Suites: 1 passed, 1 total
Tests:       3 skipped, 1 passed, 4 total
```

## Pistas

- Solo necesitas editar la línea 2.
- Consulta la documentación de los operadores de comparación de JavaScript.
