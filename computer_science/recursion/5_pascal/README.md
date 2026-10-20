# Ejercicio 5 - pascal

El triángulo de Pascal se construye de la siguiente manera:

- La primera fila es `1`.
- Podemos imaginar que cada fila tiene un `0` oculto a cada lado. Por ejemplo, la primera fila también puede representarse como `0, 1, 0`.
- Para obtener la fila siguiente, sumamos cada número con su vecino de la derecha.

Primera fila: `[1]`  
Segunda fila: `[0+1, 1+0]`, es decir, `[1, 1]`  
Tercera fila: `[0+1, 1+1, 1+0]`, es decir, `[1, 2, 1]`  
Cuarta fila: `[0+1, 1+2, 2+1, 1+0]`, es decir, `[1, 3, 3, 1]`  
...

Este patrón continúa indefinidamente.

Tu tarea es crear una función **recursiva** llamada `pascal` que reciba `n` y devuelva la fila número `n` del triángulo de Pascal como un arreglo de números.

Por ejemplo, `pascal(3)` debe devolver `[1, 2, 1]`.
