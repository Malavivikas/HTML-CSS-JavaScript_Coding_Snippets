function printAllNumbers(numbers) {
    console.log("These are the numbers");
    numbers.forEach(function(number){
      console.log(number);
    });
    console.log("These are their sums");
    numbers.forEach(function(fnum){
      numbers.forEach(function(snum){
        console.log(fnum + snum);
      });
    });
  }

  printAllNumbers([1,2,3,4]);