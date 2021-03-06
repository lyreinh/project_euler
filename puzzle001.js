/*
Problem 1
---------

### Multiples of 3 and 5 ###

> If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

> Find the sum of all the multiples of 3 or 5 below 1000.

*/

var sum = 0;
var i   = 0;
do {sum += (i % 3 == 0 || i % 5 == 0) ? i : 0} while (i++ < 1000);

document.write("The sum of all the multiples of 3 or 5 below 1000 is " + sum);