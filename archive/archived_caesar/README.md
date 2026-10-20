# Ejercicio 13 - Cifrado César

Implementa el legendario cifrado César:

> En criptografía, el cifrado César, también conocido como cifrado por desplazamiento, es una de las técnicas de cifrado más sencillas y conocidas. Es un cifrado por sustitución en el que cada letra del texto original se reemplaza por otra situada un número fijo de posiciones más adelante o atrás en el alfabeto. Por ejemplo, con un desplazamiento de 3 posiciones hacia la izquierda, D se sustituye por A, E por B, y así sucesivamente. Recibe su nombre de Julio César, quien lo utilizaba en su correspondencia privada.

Pista: quizá necesites convertir las letras a sus valores Unicode. ¡Consulta la documentación!

Escribe una función que reciba una cadena de texto y un factor de desplazamiento, y devuelva la cadena cifrada:

```javascript
caesar('A', 1) // desplaza la letra una posición: devuelve 'B'
```

El cifrado debe respetar las mayúsculas:

```javascript
caesar('Hey', 5) // devuelve 'Mjd'
```

**No** debe desplazar los signos de puntuación:

```javascript
caesar('Hello, World!', 5) // devuelve 'Mjqqt, Btwqi!'
```

El desplazamiento debe volver al principio del alfabeto al llegar al final:

```javascript
caesar('Z', 1) // devuelve 'A'
```

También debe funcionar con números negativos:

```javascript
caesar('Mjqqt, Btwqi!', -5) // devuelve 'Hello, World!'
```
