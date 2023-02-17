// Null é a ausência de valor ali dentro
// undefined não foi definida

let nome: null
// Dessa forma não é possível atribuir nada à variável nome
// É muito usado com o uniom type

let algo: string | null

algo = "teste"
algo = null

let nameUser

console.log(nameUser) // retorna undefined
console.log(algo) // retorna null