// let store: object

// store = {
//   name: "BK",
//   address: "Rua X",
//   status: true
// }

// Pode ser que veja por ai com I na frente do nome da interface
interface StoresProps {
  name: string;
  address: string;
  status: boolean;
}

// agora ele não deixa eu passar nada diferente do convencionado

const BurgerK: StoresProps = {
  name: "BK",
  address: "Rua X",
  status: true,
};

console.log(BurgerK);

//aplicando a interface em argumentos de função
// coloco o objeto no argumento
function newStore({ name, address, status }: StoresProps): void {
  console.log(`Loja ${name} criada com sucesso`);
  console.log(`Endereço da loja ${address} criada com sucesso`);
  console.log(`Status da loja ${status} criada com sucesso`);
  console.log("=====================================");
}
//passo o objeto na chamada da função

newStore({ name: "Bee", address: "Rua X", status: true });

newStore({ name: "Boo", address: "Rua Y", status: false });
