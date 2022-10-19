//////// SELECTION SORT \\\\\\\\\\\\\\\

const Livros = require ('./lista-livros')
const menorValor = require ('./vale-presente')

for(let atual = 0; atual < Livros.length - 1; atual++){

         console.log('posição atual', atual)

  let menor = menorValor(Livros, atual)
  
  let livroAtual = Livros[atual]
        console.log('livro atual:', Livros[atual])
  let livroMenorPreco = Livros[menor]
        console.log('livro com menor preço', Livros[menor])


  Livros[atual] = livroMenorPreco
  Livros[menor] = livroAtual
}

console.log (Livros)