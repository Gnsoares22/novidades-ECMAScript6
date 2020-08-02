//requisição assíncrona

async function slug(str) {
  return str.toLowerCase().replace(/ /g, "-");
}

const main = async () => {
  try {
    const frase1 = await slug("Men At Work"); //recebe a promisse resolvida
    const frase2 = await slug("Rolling Stones"); //recebe a promisse resolvida
    console.log(frase1 + " " + frase2);
  } catch (err) {
    console.log(err);
  }
};

main();
