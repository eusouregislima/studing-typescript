// não tem no JS
// Serve para enumerar tipos de dados
// Exemplo tema claro e tema escuro

//Escrito dessa maneira
enum DesignColors {
  white = "#FFFFFF",
  black = "#000000"
}

console.log(DesignColors.white)

enum StatusPermission {
  ADMIN,
  USER,
  TEST
}

console.log(StatusPermission.ADMIN)
console.log(StatusPermission.USER)
console.log(StatusPermission.TEST)

// Está retornando a posição do enum