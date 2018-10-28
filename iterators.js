/*************************************
* logger(array)
*
* - Accepts an array
* - Logs every element of the array
************************************/
const logger = function(array) {
  // Your code here
  array.forEach(a => console.log(a));
};


/*************************************
* toCelsius(temperatures)
*
* - Accepts an array of temperatures
*   in degrees Fahrenheit
* - Returns an array of temperatures
*   in degrees Celsius
*
* The conversion is:
*   C = (F - 32) * (5/9)
************************************/
const toCelsius = function(temperatures) {
  // Your code here
  let celsius = temperatures.map(F =>  (F - 32) * (5/9));
  return celsius;
}


/**************************************
* hottestDays(temperatures, threshhold)
*
* - Accepts an array of temperatures
* - Accepts a threshhold temperature
* - Returns an array of temperatures
*   that exceed the threshhold
***************************************/
const hottestDays = function(temperatures, threshhold) {
  // Your code here
let aboveThreshold = temperatures.filter(degree => degree > threshhold)
return aboveThreshold;

}


/******************************************
* logHottestDays(temperatures, threshhold)
*
* - Accepts an array of temperatures
*   IN DEGREES FAHRENHEINT
* - Accepts a threshhold temperature
*   IN DEGREES FAHRENHEINT
* - Logs temperatures that exceed the
*   threshhold to the console
*   IN DEGREES CELSIUS
*
* hint: you can combine
*       all previous functions
*******************************************/
const logHottestDays = function(temperatures, threshhold) {
  // Your code here
  let celsius = temperatures.map(F =>  (F - 32) * (5/9));
  threshhold = (threshhold - 32) * (5/9);
  let aboveThreshold = celsius.filter(degree => degree > threshhold);
  aboveThreshold.forEach(a => console.log(a));
}


export {logger, toCelsius, hottestDays, logHottestDays}
