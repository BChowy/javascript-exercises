const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(list) {
	let result = 0;
  list.forEach(element => {
    result += element;
  });

  return result;
};

const multiply = function(list) {
  let result = 1;
  list.forEach(element => {
    result *= element;
  });

  return result;
};

const power = function(num, of) {
  
	return Math.pow(num, of);
};

const factorial = function(num) {
  let result = 1;
  for (let i = 1 ; i<=num ; i++){
    result *= i;
  }
	return result;
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
