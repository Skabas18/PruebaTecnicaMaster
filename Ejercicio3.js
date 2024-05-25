function ListaNumerosImpares(n) {
    let listadoNumeros = [];
    for (let i = 1; i <= n; i += 2) {
      listadoNumeros.push(i);
    }
    return listadoNumeros;
  }
  
  // Ejemplo de uso
  let numeroEntrada = 3;
  let resultado = ListaNumerosImpares(numeroEntrada);
  console.log(resultado); // [1, 3, 5, 7, 9]
  