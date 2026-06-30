const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(numbers) {
 let resault=numbers.reduce((sum,current)=>sum+current,0);
 return resault;
};

const multiply = function(numbers) {
 let resault=numbers.reduce((sum,current)=>sum*current,1);
 return resault;
};

const power = function(base,exponent) {
	return Math.pow(base,exponent);
};

const factorial = function(num) {
  if(num==1||num==0){
    return 1;
  }
  else{
    let result=1;
	for(let i=2;i<=num;i++){
    
    result=result*i;
  }
   return result;
}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
