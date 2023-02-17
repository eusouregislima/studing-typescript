/* 
DECORATORS
Class
Props
Métodos
Parâmetros ( Bem pouco usado)
Getters / setters (Bem pouco usado)


Como criamos um decorator (É uma função na prática)
*/

// O primeiro parametro que a função recebe é o target, que a documentação manda tipar como any
//target vai receber o construtor da nossa classe
// Exemplo comentado
// function logInfo(target: any) {
//   console.log("Sistema está online");
// }

//aqui um exemplo de como relacionar um decorator a essa classe
//Não preciso instanciar para esse decorator ser chamado

//Padrão factory (Fábrica) | Função que vai retornar a criação do decorator
// Isso é um desigm patterns

/*

function logInfo(mensagem: string) {
  return (target: any) => {
    console.log(`${mensagem}, ${target}`);
  };
}

@logInfo("Servidor está rodando")
class Sistema {}

*/

// =================================== Praticando =================================

function setIpServidor(newIp: string) {
  return (target: any) => {
    // o target é o construtor da nossa classe
    return class extends target {
      ip = newIp;
    };
  };
}

// aqui quer dizer que dentro do meu construtor eu tenho um ip que vai receber o Ip de baixo

@setIpServidor("192.168.50.30")
class Servidor {}

const servidor1 = new Servidor();
console.log(servidor1);
