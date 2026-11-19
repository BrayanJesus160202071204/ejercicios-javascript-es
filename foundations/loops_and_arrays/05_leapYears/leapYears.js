const leapYears = function(año) {
    const esDivisibleEntre4 = año % 4 === 0;
    const esDivisibleEntre100 = año % 100 === 0;
    const esDivisibleEntre400 = año % 400 === 0;
    
    if (esDivisibleEntre4 && (!esDivisibleEntre100 || esDivisibleEntre400)){
        return true
    }
    return false
};

// Do not edit below this line
module.exports = leapYears;
