// aqui mostra como passar um array na interface
interface TecnologyProps {
  id: string;
  name: string;
  slug: (string | number)[];
}

let tecnologyOne: TecnologyProps = {
  id: "1",
  name: "PHP",
  slug: ["php", "php-do-zero", "php12", 15],
};

// Prosseguindo

interface TecnologyPropsTwo {
  id: string;
  name: string;
  description?: string;
}

//Nesse exemplo eu peguei o meu objeto e estou criando um array de objetos reaproveitando a interface

interface NamesProps {
  tecnology: TecnologyPropsTwo[];
}

let frontEnd: NamesProps = {
  tecnology: [
    { id: "1", name: "teste", description: "teste descrição" },
    { id: "2", name: "teste dois" },
  ],
};

console.log(frontEnd.tecnology);
//ok
