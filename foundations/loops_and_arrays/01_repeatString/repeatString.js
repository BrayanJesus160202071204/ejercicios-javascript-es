const repeatString = function(string , num) {
    if (num < 0){
        return "ERROR"
    }
    let texto = "";
    for(let i=0; i<num ; i++){
        texto += string
    }
    return texto
};


// Do not edit below this line
module.exports = repeatString;
