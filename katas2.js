// comece a criar a sua função add na linha abaixo

function add(num1,num2){
    return num1 + num2;
}
// console.log(add(3,5));
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
// while ou for
function multiply(num1,num2){
    let somaResultado = 0;
    for(let i = 0;i < num2;i++){
       somaResultado = add(somaResultado,num1);
    }
    return somaResultado
}
console.log(multiply(3,5))
console.log(multiply(5,5))
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');

// function multiply(num1,num2){
//     let somaResultado = 0;
//     let i = 0;
//     while(i < num2){
//         somaResultado = add(somaResultado,num1);
//         i++;
//    }
//     return somaResultado
// }
// console.log(multiply(3,5))
// power(3,4)

// comece a criar a sua função power na linha abaixo
function power(num1,num2){
    let potenciaResultado = 1;
    for(let i = 0; i< num2; i++){
        potenciaResultado = multiply(potenciaResultado,num1)  
    } 
    return potenciaResultado
}
console.log(power(3,4));
// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// // comece a criar a sua função factorial na linha abaixo
function factorial(num1){
    let resultado = multiply(num1,num1-1)
    for(let i=num1 -2;i>=1;i--){
      resultado = multiply(resultado,i);
    }
    return resultado;
}   

factorial(5);
// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(sequencia){
  if(sequencia===1){
    return 1
  }
  let anterior = 0;
  let atual = 1;
  let resultado = 0;
  for(let i =1; i < sequencia; i++){
    resultado = add(anterior,atual);
    anterior = atual;
    atual = resultado;
  }
//0
return resultado;

}
fibonacci(7);
// descomente a linha seguinte para testar sua função
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');