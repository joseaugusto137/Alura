/*function soma (){
    //return precisa ser a ultima linha do bloco
    return (45*2+6)/4
}

console.log(soma())*/

//// Parâmentros e argumentos

/*function soma(num1, num2){
    return num1 + num2
}

console.log(soma(5,25))
console.log(soma(350,785))
console.log(soma(2,10))
console.log(soma(8,32))*/

/*function nomeIdade(nome, idade){
    return `meu nome é ${nome} e tenho ${idade} anos.`
}

//console.log(nomeIdade(40,'Carlos'))
console.log(nomeIdade('Carlos', 40))*/

/*function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('José') 
*/
   
///////Expressão de função

/*const soma = function (num1, num2) {return num1 + num2}

console.log(soma(2,2))*/

///// arrow function

//const apresentarArrow = nome => `meu nome é ${}.`



const soma = (num1, num2) => num1 + num2

const somaNumerosPequenos = (num1, num2) => {
    if(num1 > 10 || num2 >10){
    return "somente números de 1 a 9"
} else{
    return num1 + num2
}
}

console.log(somaNumerosPequenos(3,2))



