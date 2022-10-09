

/*var altura = 5
var comprimento = 7
area = altura * comprimento
console.log(area)
var area*/
//ESCOPO GLOBAL.Não possui muitas regras, o que faz com que certos comportamentos imprevisíveis acabem ocorrendo. Por isso, atualmente não é mais utilizada.

/*let forma = 'retângulo'
let altura = 5
let comprimento = 7


if(forma === 'retângulo'){
    
area = altura * comprimento
}else{
     area = (altura * comprimento) /2
}

console.log(area)
let area*/

// ESCOPO LOCAL. Usa-se o let quando o valor da variável vai precisar mudar

/*const forma = 'triangulo'
const altura = 5
const comprimento = 7
let area

if(forma === 'retângulo'){
    
area = altura * comprimento
}else{
     area = (altura * comprimento) /2
}

console.log(area)*/

// const sempre precisa da atribuição de um valor. Usa-se const quando o valor da variável é fixo.
//_______________________________

/*truthy ou falsy

0 = false
1 = true*/


/*console.log (0 == false)
console.log ('' == false)*/

var respostaDeTudo = 42
let idade = 29
const pi = 3.14

{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29

    console.log(respostaDeTudo, idade, pi)

}
idade = 50

console.log (respostaDeTudo, idade, pi)
  
  
  
  