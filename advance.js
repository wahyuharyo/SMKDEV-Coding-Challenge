function printNumberPattern(n) {
    for (let i = n; i >= 1; i--) {
      let panjang = '';
      for (let j = i; j >= 1; j--) {
        panjang += j + ' ';
      }
      console.log(panjang);
    }
  }
  
  printNumberPattern(5);
  