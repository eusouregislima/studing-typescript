// Example whith arrow functions

function returnAPI(url: string): string {
  return url;
}

console.log(returnAPI("teste.com"));

const retornoAPI = (url: string): void => {
  console.log("URL DA API ", url);
};

retornoAPI("http://teste.com");
