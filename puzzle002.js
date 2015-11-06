/*
Problem 2
---------

### Even Fibonacci numbers ###

Published on Friday, 19th October 2001, 06:00 pm; Solved by 416933; Difficulty rating: 5%
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

var pfn = 1; // Previous Fibonacci number;
var cfn = 2; // Current  Fibonacci number;
var nfn = 0; // Next     Fibonacci number;
var sum = 2;

do {
  nfn = pfn + cfn;
  if (nfn % 2 === 0) {
    document.write("Added Fibonacci number " + nfn + "<br /><br />");
    sum += nfn;
  }
  pfn = cfn;
  cfn = nfn;
} while (cfn < 400000000);

document.write("The summary of Fibonacci number from 0 to 400000000 is " + sum);