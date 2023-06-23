function next_pal(numero) {

    function compare(numero) {
      return numero.toString() === numero.toString().split('').reverse().join('');
    }
    
    while (true) {
      numero++;
      if (compare(numero)) {
        return numero;
      }
    }
  }
  
  console.log(next_pal(900));  
  

