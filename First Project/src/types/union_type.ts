// possibilitar o uso de mais de um tipo -> utilizo o |

let userId: number | string;

userId = 123
userId = "123"

// typeof devolve no console o tipo da variável
console.log(typeof userId)
// result number

console.log(userId)