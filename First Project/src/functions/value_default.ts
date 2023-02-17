// como deixar um valor por default ou deixar ele opcional, para isso usamos o Elvis Operator

function signup(email: string, password: string, name?: string): void {
  let data = { email, password, name };

  console.log(data);
}

signup("teste@teste.com", "123456", "Régis");

// agora colocando um valor por padrão caso não passe nada

function signin(
  email: string,
  password: string,
  name = "Aluno",
  age?: number
): void {
  let data = { email, password, name, age };

  console.log(data);
}

signin("teste@teste.com", "123456", "teste", 28);

// se não mando o nome ele preenche com "aluno"

function signupStore(name: string, email: string, status = false): boolean {
  console.log("Status Atual: ", status);
  return status;
}

signupStore("BK", "bktest@teste.com", true);
