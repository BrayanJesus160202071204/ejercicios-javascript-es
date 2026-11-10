const sumAll = function(a, b) {
    //1. Validar: enteros y no negativos
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    if (a<0 || b<0) return "ERROR";
    if ( a === "" || b === "") return "ERROR";

    //2. Ordenar no importa cual benga primero
    const inicio = Math.min(a, b);
    const fin = Math.max(a, b);

    //3. Acumular
    let suma = 0;
    for (let n = inicio; n <= fin; n++){
         suma += n;
    }
    return suma;
};

// Do not edit below this line
module.exports = sumAll;
