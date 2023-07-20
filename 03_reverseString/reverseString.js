const reverseString = function(string) {
    let length = string.length;
    var output= "";
    for (let i = length-1; i>=0; i--){
        output += string.charAt(i);
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
