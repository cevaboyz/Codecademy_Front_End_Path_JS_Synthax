const kelvin = 0; //this is the constant holding the temperature value

const celsius = kelvin - 273; //Celsius is 273 degrees less than kelvin

var fahrenheit = celsius * (9 / 5) + 32; // this formula converts the celsius degree to fahrenheit degree

console.log(fahrenheit); 


var fahrenheit = Math.floor(fahrenheit)
console.log(fahrenheit)

console.log(`The Temperature is ${fahrenheit} degrees Fahrenheit`)