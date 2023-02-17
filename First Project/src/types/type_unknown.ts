// Unknown: Tipo desconhecido -> Quando você não sabe o tipo que vai receber

let total: any // aqui aceita tudo

let total2: unknown //anoun

let idPedido: any = 123
let totalPedido: unknown = 15

//valor do tipo unknown só pode ser atribuído ao tipo unknown ou ao tipo any
// let totalEntrega: number = totalPedido -> Assim não é possível

let entregador: number = idPedido

let totalEntrega: unknown = totalPedido

console.log(totalEntrega)