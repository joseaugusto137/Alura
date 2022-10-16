const nomes = ['João', 'Juliana', 'Ana', 'Caio']

const mediasDosAlunos = [10, 7.5, 8, 5.7]

const listaDeNotaAlunos = [nomes, mediasDosAlunos]

const exibiNomeNota = (nomes) =>{
    if(listaDeNotaAlunos[0].includes(nomes)){
      const  indice = listaDeNotaAlunos[0].indexOf(nomes)

        return listaDeNotaAlunos[0][indice] + ', sua média é ' + listaDeNotaAlunos[1][indice]
    }else{
        return 'Aluno não está Cadastrado'
    }
}

console.log(exibiNomeNota('Juliana'))

// inclides sempre retornará um verdadeiro ou falso (booleano)

//indexOf retorna um número referete ao índice