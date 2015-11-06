/*
Problem 3
---------

### Largest prime factor ###

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

var isPrime = function(num) {
  var factor = 0;
  for(var i = 1; i <= num; i++) {
    if (num % i === 0) factor++;
  }
  
  return (factor > 2) ? false : true;
};

var getPrimeFactors = function(num) {
  var pm = [];
  for(var i = 1; i <= num; i++) {
    if (num % i === 0) {
      if (isPrime(i)) pm.push(i);
    }
  }
  return pm;
};
var pma = getPrimeFactors(600851475143);

document.write("The largest prime factor of the number 600851475143 is " + pma[pma.length - 1]); 