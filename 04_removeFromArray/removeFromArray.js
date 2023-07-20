const removeFromArray = function(arr , ...values) {
    const newArray = [];
    arr.forEach((item)=>{
        if(!values.includes(item)){
            newArray.push(item);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
