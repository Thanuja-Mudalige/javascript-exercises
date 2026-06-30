const findTheOldest = function(people) {
let newArray=people.map((element)=>{
    let name=element.name;
    let age=(element.yearOfDeath || new Date().getFullYear())-element.yearOfBirth;
    return {name,age}

});
return newArray.reduce((prev,current)=>prev.age>current.age?prev:current)
};

// Do not edit below this line
module.exports = findTheOldest;
