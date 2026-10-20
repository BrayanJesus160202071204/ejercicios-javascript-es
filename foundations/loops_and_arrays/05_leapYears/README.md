# Ejercicio 05 - leapYears

Crea una función que determine si un año es bisiesto. Los años bisiestos se identifican mediante estas reglas:

> Los años bisiestos son divisibles entre cuatro (como 1984 y 2004). Sin embargo, los años divisibles entre 100 no son bisiestos (como 1800 y 1900), a menos que también sean divisibles entre 400 (como 1600 y 2000, que sí fueron bisiestos). Sí, puede resultar un poco confuso.
>
> — [Learn to Program](https://pine.fm/LearnToProgram/chap_06.html), de Chris Pine (traducción al español)

```javascript
leapYears(2000); // es bisiesto: devuelve true
leapYears(1985); // no es bisiesto: devuelve false
```

¿Todavía tienes dudas? Consulta [esta explicación de los años bisiestos](https://www.calendar-12.com/leap_year) con ejemplos.

## Pistas

- Utiliza una sentencia `if` y el operador `&&` para comprobar correctamente todas las condiciones.
