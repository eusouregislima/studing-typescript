// Type boolean

let estaAutenticado: boolean = true

let codeStatus: number = 1

// estaAutenticado = codeStatus -> Assim não posso fazer
estaAutenticado = Boolean(codeStatus) // tudo o que for !== de 0, string vazia ou undefined será true

console.log(estaAutenticado)
console.log(typeof estaAutenticado)