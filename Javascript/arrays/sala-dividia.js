
const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']

//nomes.splice(6,1, 'Rodrigo' )
nomes.splice(9, 0 , 'Rodrigo')

const sala1 = nomes.slice(0, nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)





console.log(`Estes são os alunos da oitava série A: ${sala1}`)

console.log(`Estes são os alunos da oitava série B: ${sala2}`)