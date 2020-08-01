// split(): The split method splits a string at a specified place.
let string = '30 Days Of JavaScipt'
console.log(string.split())     // ["30 Days Of JavaScript"]
console.log(string.split(' '))  // ["30", "Days", "Of", "JavaScript"]
let firstName = 'Asabeneh'
console.log(firstName.split())  // ["Asabeneh"]
console.log(firstName.split(''))  // ["A", "s", "a", "b", "e", "n", "e", "h"]
let countries = 'Nigeria, Ghana, Congo, Ethopia, and Kenya'
console.log(countries.split(',')) // ["Nigeria", " Ghana", " Congo", " Ethopia", " and Kenya"]
console.log(countries.split(', '))   //  ["Nigeria", "Ghana", "Congo", "Ethopia", "and Kenya"]