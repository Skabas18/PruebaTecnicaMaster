function CalcularSenoProducto(x, y, z) { //Recibe tres datos como parametro
    let suma = x + y;    //Realiza suma entre dos de los parametros recibidos
    let producto = suma * z; // Realiza la multiplicacion entre la suma y el parametro faltante
    let senoCalculado = Math.sin(producto); //Calcula el seno del producto
    return senoCalculado;   //Retorna el Seno
  }
  