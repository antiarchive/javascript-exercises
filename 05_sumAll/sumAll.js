const sumAll = function(first , second) {
    var sumAll  = 0;
    if(!Number.isInteger(first)|| !Number.isInteger(second)){
        return "ERROR";
    }
    if(first < 0 || second < 0){
        return "ERROR";
    }
    var maxim = Math.max(first , second);
    var minim = Math.min(first , second);
    for ( let i = minim ; i<= maxim ; i++){
        sumAll += i;
    }
    return sumAll;
};

// Do not edit below this line
module.exports = sumAll;
