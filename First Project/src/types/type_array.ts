// Type array

let numeros: number[] //Passando que será um array que recebe apenas números

let filmes: string[] // Forma recomendada de utilizar 

// para dois tipos
let filmes4: (string | number)[]

// Outra maneira de tipar

let filmes2: Array<string> // pouco usada

// outra maneira

let filmes3: Array<string | number>

filmes = ["Adão negro", "Avatar 2", "Vingadores"]
filmes2 = ["O chamado", "Jason", "A espera de um milagre"]
filmes3 = ["O chamado", "Jason", "A espera de um milagre"]

filmes.push("Titanic")
filmes2.push("Rio")
filmes3.push(300)

console.log('meus filmes', filmes)
console.log('meus filmes 2', filmes2)
console.log('meus filmes 3', filmes3)

numeros = [1, 3, 5, 7]

console.log(numeros)

numeros.push(55)

console.log('Meus números', numeros)