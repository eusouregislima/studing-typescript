// Afirmando algum tipo
// Nesse exemplo eu tenho uma variável que eu não sei como viria da API, porém veio um número
let statusAtual: unknown = 1

let mudaStatus: number = 0

// Estou afirmando que o status atual é de fato um número
mudaStatus = statusAtual as number

//outra maneira de afirmar o tipo
mudaStatus = <number>statusAtual 

console.log(mudaStatus)

let query: unknown = 'pizza'

let searchTerm: string = query as string

console.log('Search', searchTerm)