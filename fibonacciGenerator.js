function fibonacciGenerator (n) {
  // Fn = Fn-1 + Fn-2 
  var sequence = [];
  var firstNum = -1;
  var secNum = 1;
  var sum = 0;
  
  for (var count = 0; count < n; count++) {
    sum = firstNum + secNum;
    sequence.push(sum);
    // 
    firstNum = secNum;
    secNum = sum;
    }
  return sequence;
}

fibonacciGenerator(3);
