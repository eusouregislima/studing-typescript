//aqui o Elvis Operator torna opcional enviar o nome

interface SignupProps {
  name?: string;
  email: string;
  status: boolean;
}

const newUser: SignupProps = {
  // name: "teste",
  email: "teste@example.com",
  status: true,
};

console.log(newUser);

function otherUser({ name, email, status }: SignupProps) {
  console.log(name);
}

otherUser({ name: "Régis", email: "teste@example.com", status: true });
//Aqui retornou tudo ok
otherUser({ email: "teste@example.com", status: true });
//nesse caso retorna undefined no console do name.

//mais uma forma
//desconstruindo o objeto e pegando apenas a propriedade
function otherUser2(props: SignupProps) {
  console.log(props.name);
}

otherUser({ name: "Régis", email: "teste@example.com", status: true });
//Aqui retornou tudo ok
otherUser({ email: "teste@example.com", status: true });
//nesse caso retorna undefined no console do name.

// próxima aula - Passando funções na interface
