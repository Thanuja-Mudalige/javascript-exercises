const palindromes = function (text) {
let textlower=text.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
let revesed=textlower.split('').reverse().join('');
if(textlower==revesed){
    return true;
}
else{
    return false;
}
};

// Do not edit below this line
module.exports = palindromes;
