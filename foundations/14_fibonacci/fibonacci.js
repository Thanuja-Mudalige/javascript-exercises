const fibonacci = function(num) {
let firstCharacter=1;
let secondCharacter=1;
let nextCharacter;
if(num<0){return 'OOPS'}
else if(num==0){return 0;}
else if(num==1||num==2){
    return 1;
}
else{
for(let i=3; i<=num;i++){
nextCharacter=firstCharacter+secondCharacter;
firstCharacter=secondCharacter;
secondCharacter=nextCharacter;
}}
return nextCharacter;
};

// Do not edit below this line
module.exports = fibonacci;
