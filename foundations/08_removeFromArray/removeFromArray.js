const removeFromArray = function(array, ...values) {
let array2=[];
array.forEach(element => { 
    if(!values.includes(element))
        {array2.push(element)}   
});
return array2;
};

// Do not edit below this line
module.exports = removeFromArray;
