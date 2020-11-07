function moduloEx5(n1, n2) {
    if (n1 > n2 && n1 % n2 !== 0) {
      let q2 = n1 % n2;
      var showcase1= console.log(`The number ${n1} is bigger than ${n2}. But the modulo of ${n1} % ${n2} is ${q2}`);
      var finalcase = 'showcase1' 
    }
    else if (n1 > n2) {
      var showcase3=console.log(`The number ${n1} is bigger than ${n2}`);
      var finalcase = 'showcase2' 
    }
  
    else if (n1 < n2) {
      var showcase4=console.log(`The number ${n1} is less than ${n2}`);
      var finalcase = 'showcase3' 
    }
    else if (n1 === n2) {
      var showcase5=console.log(`The number ${n1} is equal to ${n2}`);
      var finalcase = 'showcase4' 
    }
  
   finalcase;
  }

// Do not remove or change this line, or the tests won't work
export { moduloEx5 };
