function drawX(tamano) {
  for (let x = 0; x < tamano; x++) {
    let linea = "";
    for (let y = 0; y < tamano; y++) {
      if (y === x || y === tamano - 1 - x) {
        linea += "*";
      } else {
        linea += " ";
      }
    }
    console.log(linea);
  }
} 
drawX(7)

