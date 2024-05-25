function ListaNumerosImpares(n) { //Recibe el numero de entrada como parametro
  let listadoNumeros = [];  //Se crea el array vacio
  for (let i = 1; i <= n; i += 2) { //Se empiza en 1 y se va incrementando de 2 en 2 para asegurar que sean numeros impares
    listadoNumeros.push(i); //Se agrega al arreglo cada impar que encuentra que este dentro del rango establecido
  }
  return listadoNumeros; //Retorna el arreglo de impares
}

let numeroEntrada = 3; //Se define el numero de entrada
let resultado = ListaNumerosImpares(numeroEntrada); //Se guarda el retorno de la funcion ListaNumerosImpares
console.log(resultado); //Se imprime el arreglo resultante en consola
