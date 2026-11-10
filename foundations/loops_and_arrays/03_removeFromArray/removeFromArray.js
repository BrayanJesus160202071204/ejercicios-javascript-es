const removeFromArray = function(arreglo, ...permitidos) {
    return arreglo.filter ((elemento) => permitidos.includes(elemento))
};

// Do not edit below this line
module.exports = removeFromArray;
