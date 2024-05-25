function ListaNumerosImpares(n) {
  let listadoNumeros = [];
  for (let i = 1; i <= n; i += 2) {
    listadoNumeros.push(i);
  }
  return listadoNumeros;
}

let numeroEntrada = 3;
let resultado = ListaNumerosImpares(numeroEntrada);
console.log(resultado);
