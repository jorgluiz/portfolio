function calculaQuadrado(num) {
    const resultadoSoma = soma(num);
    return resultadoSoma * resultadoSoma;
   }
   
   function soma(num) {
    return num + num;
   }
   
   function imprimeValor(valor) {
    const resultado = calculaQuadrado(valor)
    console.log(`o resultado é ${resultado}`);
   }
   
   imprimeValor(3); // ‘o resultado é 36’

   const multiply = new Function("x", "y", "return x * y");

console.log(multiply(2, 2))