const convertToCelsius = function(temp) {
  return roundNum((temp - 32) * (5/9));
};

const convertToFahrenheit = function(temp) {
  return roundNum((temp * (9/5)) + 32);
};

function roundNum (num){
  return Math.round(num * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
