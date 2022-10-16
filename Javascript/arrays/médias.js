
// const nota1 = 10
// const nota2 = 6.5
// const nota3 = 8
// const nota4 = 7.5

            // índices(posição)\\
const notas = [10, 6.5, 8, 7.5]

 //notas.pop() ou notas.shift()
 notas.push(4) // ou notas.unshift()
// console.log(notas)

// const media = (nota1 + nota2 + nota3 + nota4)/4

// const media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / notas.length



// console.log(`A média é ${media}`)

const media = notas.reduce((acum, atual) => atual + acum,0)/notas.length

console.log(media)

