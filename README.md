# Ejercicios de JavaScript en español

Estos ejercicios de JavaScript complementan los contenidos de [The Odin Project](https://www.theodinproject.com/) (TOP). Se recomienda realizarlos en el momento indicado por el programa de estudios.

Esta es una adaptación educativa al español del repositorio de ejercicios de The Odin Project. Se conservan los nombres de las funciones, las pruebas y los archivos necesarios para practicar. Las carpetas con soluciones de ejemplo se han excluido de esta versión para que cada estudiante resuelva los ejercicios por su cuenta.

> [!IMPORTANT]
> Practica tus habilidades con Git creando commits y enviando tus cambios a tu propio repositorio. **NO** abras un Pull Request en el repositorio original para enviar tus soluciones: esos cambios no se integrarán y generarían trabajo adicional para sus responsables.

## Contribuciones

Si tienes sugerencias para mejorar un ejercicio, ideas para ejercicios nuevos o detectas algún problema, consulta primero la [guía de contribuciones del proyecto original](https://github.com/TheOdinProject/javascript-exercises/blob/main/CONTRIBUTING.md). Para esta adaptación, también puedes utilizar los mecanismos de colaboración del repositorio correspondiente.

## Cómo utilizar estos ejercicios

1. **Clona el repositorio.** Puedes consultar la [documentación de GitHub sobre clonación](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository). Si deseas trabajar desde una copia en tu propia cuenta, consulta también [cómo crear un fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#forking-a-repository).
2. **Instala Node.js y npm.** Comprueba que npm esté disponible con `npm --version`. Si no está instalado, sigue las instrucciones de [instalación de Node.js](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/installing-node-js) de The Odin Project. No utilices automáticamente una sugerencia de instalación mediante `apt-get` si aparece un error de npm; el proyecto recomienda instalar Node mediante NVM para evitar problemas de permisos.
3. **Instala las dependencias.** Entra en la carpeta del repositorio (por ejemplo, `cd ejercicios-javascript-es`) y ejecuta `npm install`. Esto instalará Jest y configurará las herramientas de prueba. Es posible que aparezcan avisos sobre paquetes desactualizados o vulnerabilidades; revisa su relevancia antes de utilizarlos fuera de este entorno de práctica.
4. **Revisa los archivos de cada ejercicio.** Encontrarás un `README.md` con las instrucciones, un archivo JavaScript vacío o casi vacío y un archivo de pruebas. Esta versión no incluye las carpetas con soluciones.
5. **Ejecuta las pruebas.** Entra en el directorio del ejercicio y ejecuta `npm test exerciseName.spec.js`. Por ejemplo, para el primer ejercicio de fundamentos:

   ```bash
   cd foundations/data_types_and_conditionals/01_helloWorld
   npm test helloWorld.spec.js
   ```

   La primera ejecución normalmente fallará: ¡es intencional! Abre el archivo del ejercicio y escribe el código necesario para superar las pruebas.
6. **Habilita las pruebas pendientes.** Algunos archivos `.spec.js` contienen `test.skip` en lugar de `test`. Cuando superes las pruebas activas, sustituye el siguiente `test.skip` por `test` y vuelve a ejecutar las pruebas. Repite el proceso hasta que **todas las pruebas se superen al mismo tiempo** y no quede ningún `test.skip` en el ejercicio.
7. **Compara y mejora tu código.** Revisa los resultados de las pruebas, depura los errores y prueba distintas soluciones. No es necesario que todos los estudiantes resuelvan un problema de la misma forma, siempre que cumplan los requisitos.

El primer ejercicio, `helloWorld`, explica este proceso con mayor detalle.

## Depuración

Puedes ejecutar las pruebas desde la terminal de depuración de Visual Studio Code. Abre **Ejecutar y depurar** en la barra lateral (o presiona <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>D</kbd>) y selecciona **JavaScript Debug Terminal**. Allí podrás establecer puntos de interrupción, como en las herramientas de desarrollo de Chrome. Ejecuta `npm test exerciseName.spec.js` para detener la ejecución en un punto de interrupción y avanzar paso a paso.

**Importante:** para aprovechar el depurador, ejecuta el comando en la terminal de depuración de JavaScript, no en una terminal bash o zsh convencional.

## Créditos y licencia

Contenido original: [The Odin Project — javascript-exercises](https://github.com/TheOdinProject/javascript-exercises). Traducción y adaptación al español para fines educativos. Consulta el archivo `LICENSE` incluido en el repositorio para conocer las condiciones aplicables.
