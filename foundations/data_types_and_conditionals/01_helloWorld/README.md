# Ejercicio 01 - Hola, mundo

El objetivo principal de este ejercicio es guiarte por el proceso de ejecución de las pruebas y asegurarnos de que todo esté configurado y funcione correctamente.

En esta carpeta encontrarás otros dos archivos:

1. `helloWorld.js`
2. `helloWorld.spec.js`

La estructura será parecida en todos los ejercicios. En el archivo JavaScript escribirás tu código, mientras que el archivo `spec` contiene las pruebas que comprueban que funciona correctamente.

Primero, revisemos el archivo de pruebas:

```javascript
const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
```

Al principio del archivo utilizamos `require()` para importar el código de `helloWorld.js` y poder probarlo.

El bloque siguiente, `describe()`, contiene la prueba. Básicamente, ejecuta tu código y comprueba si el resultado es correcto. La función `test()` describe en inglés lo que debe ocurrir e incluye la función `expect()`. En este ejemplo sencillo, debería resultar bastante fácil de interpretar.

Por ahora no necesitas preocuparte por cómo escribir pruebas, pero sí conviene que te familiarices con su sintaxis para entender lo que te piden. Ejecuta `npm test helloWorld.spec.js` en la terminal y observa cómo falla. La salida del comando debería indicar qué salió mal. En este caso, `helloWorld()` debería devolver la frase `'Hello, World!'`, pero devuelve una cadena vacía.

Veamos el archivo JavaScript:

```javascript
const helloWorld = function() {
  return ''
}

module.exports = helloWorld;
```

Aquí tenemos una función sencilla llamada `helloWorld` que devuelve una cadena vacía, ¡justo lo que señala la prueba! La instrucción `module.exports` de la última línea exporta la función para que el archivo de pruebas pueda importarla mediante `require()`.

Intenta superar la prueba modificando el valor que devuelve la función y ejecutando nuevamente el archivo de pruebas.

Por si tienes dudas: la prueba indica que la función `helloWorld` debe devolver exactamente la frase `Hello, World!`. Los signos de puntuación y las mayúsculas importan, así que revísalos si la prueba sigue fallando.

Esta es la forma que debería tener la función final:

```javascript
const helloWorld = function() {
  return 'Hello, World!'
}

module.exports = helloWorld;
```

En general, las pruebas están preparadas para que solo tengas que modificar o escribir el código que se está evaluando. En esta etapa no deberías preocuparte por importar o exportar módulos: concéntrate en escribir el código necesario para superar las pruebas.
