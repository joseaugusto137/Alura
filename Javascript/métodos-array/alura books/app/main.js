let livros = []
const endPointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getbuscarLivrosDaAPI()



async function getbuscarLivrosDaAPI(){
    const res = await fetch(endPointDaAPI)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)

    exibirLivrosTela(livrosComDesconto)
}



