# Ejercicio 06 - tempConversion

Escribe dos funciones que conviertan temperaturas de Fahrenheit a Celsius y viceversa:

```javascript
convertToCelsius(32) // de Fahrenheit a Celsius; debe devolver 0

convertToFahrenheit(0) // de Celsius a Fahrenheit; debe devolver 32
```

Para que el resultado sea más fácil de leer, queremos redondear la temperatura a un decimal. Por ejemplo, `convertToCelsius(100)` debe devolver `37.8` y no `37.77777777777778`.

Este ejercicio requiere crear más de una función, por lo que la sección `module.exports` del archivo JavaScript principal será un poco diferente. No te preocupes: simplemente exportaremos ambas funciones dentro de un mismo objeto.

## Pistas

- Puedes consultar las fórmulas correspondientes en [Wikipedia](https://en.wikipedia.org/wiki/Conversion_of_units_of_temperature).
- Investiga cómo redondear un número a un decimal en JavaScript. Si necesitas ayuda, consulta [esta respuesta](https://stackoverflow.com/q/7342957/5433628).
