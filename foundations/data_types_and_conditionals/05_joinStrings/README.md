# Ejercicio 05 - joinStrings

## Paso 1: Aprende

Primero, revisa el código de ejemplo en `joinStrings-example.js`. Intenta predecir qué mostrará `console.log`. Cuando estés listo, ejecuta la prueba:

```bash
npm test joinStrings-example.spec.js
```

Si el resultado te sorprende, vuelve a revisar el código.

## Paso 2: Practica

Cuando entiendas el ejemplo, vuelve a crear el fragmento por tu cuenta en `joinStrings.js` siguiendo estas instrucciones:

1. Crea cuatro variables: `firstName`, `lastName`, `thisYear` y `birthYear`.
2. Crea una quinta variable, `greeting`, a partir de las cuatro anteriores.
   - Debe contener un saludo que incluya el nombre completo y la edad de la persona.

**Nota:** Para superar las pruebas, debes utilizar exactamente los valores y el texto indicados en `joinStrings.js`. Si alguna prueba falla, revisa los mensajes de la terminal y comprueba los espacios, las mayúsculas y los signos de puntuación.

## Paso 3: Mejora el código

Edita el código para hacerlo más fácil de leer:

1. Crea dos variables nuevas: `fullName` y `age`.
   - **NO** escribas directamente el nombre completo y la edad en esas variables.
   - Utiliza las variables existentes y los cálculos que actualmente están dentro de `greeting`.
2. Modifica la cadena `greeting` para utilizar `fullName` y `age` en lugar de las otras cuatro variables. Debería parecerse a esto:

   ```js
   "Hello! My name is " + fullName
   ```

Ejecuta todas las pruebas una última vez para comprobar que el resultado no ha cambiado:

```bash
npm test joinStrings.spec.js
```

## Pistas

- Consulta la documentación sobre variables de JavaScript.
- Si todavía tienes dudas, revisa la [lección sobre variables y operadores](https://www.theodinproject.com/lessons/foundations-variables-and-operators).
