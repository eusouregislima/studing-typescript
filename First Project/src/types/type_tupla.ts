// Tupla não possui no Js, apenas no Ts

let aluno: [string, number] 
// não pode adicionar nada diferente disso, pois precisa seguir o contrato definido na mesma ordem

aluno = ["Programador", 1945]

aluno.push("Régis", 37)

// aluno.push(123, "teste") assim ele aceitou

console.log(aluno)

let statusPedido: [string, string, string]

statusPedido = ["Em produção", "Saiu para entrega", "Entregue"]