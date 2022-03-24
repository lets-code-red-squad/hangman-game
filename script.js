const btnTryAgain = document.getElementById("try-again");
const palavra = document.getElementById("palavra");
const letras = document.getElementsByClassName("letra");
const boneco = document.getElementsByClassName("boneco")[0];
const letrasErradas = [];
const letrasCertas = [];
const todasLetras = [];
let counter = 0;

const meio = boneco.children[1].children;
const pernas = boneco.children[2].children;

const corpo = {
  cabeca: boneco.children[0],
  tronco: meio[1],
  bracoEsquerdo: meio[0],
  bracoDireito: meio[2],
  pernaEsquerda: pernas[0],
  pernaDireita: pernas[1]
};

const palavras = [
  {
    brasil: ["Um país da América", "O quinto maior do Mundo"],
    "estados unidos": []
  },
  {
    cachorro: ["mamifero", "caramelo"],
    gato: ["mamifero", "gosta de se limpar"]
  },
  {
    banana: ["amarela", "potássio"],
    maçã: ["vermelha", "dá fome"],
    uva: ["roxo", "bom no calor"]
  }
];

const aleatoriza = (element) => Math.floor(Math.random() * element.length);

btnTryAgain.onclick = () => {
  palavra.innerHTML = "";
  novaPalavra = retornaPalavra();
  risquinhos(novaPalavra);
};

const geraBoneco = (letra) => {
  const keys = Object.keys(corpo);

  console.log(letrasErradas);
  letrasErradas.push(letra);
  corpo[keys[counter]].classList.add("show");
  counter += 1;
};

const verificaLetra = (word, letra) => {
  if (word.includes(letra)) {
    if (todasLetras.includes(letra)) {
      return console.log("letra repetida");
    } else {
      todasLetras.push(letra);
      letrasCertas.push(letra);
      console.log(todasLetras, letrasCertas);
      return letra;
    }
  }
  geraBoneco(letra);
};

const trocaLetras = (word, letra) => {
  const indices = [];

  return word.map(() =>
    word.forEach((letter, index) =>
      letter === letra ? (letras[index].innerHTML = letter) : letter
    )
  );
};

const retornaPalavra = () => {
  const wordKeys = palavras.map((chaves) => Object.keys(chaves));
  const wordThemes = wordKeys[aleatoriza(wordKeys)];
  const wordChosen = wordThemes[aleatoriza(wordThemes)].split("");

  return wordChosen;
};

const risquinhos = (novaPalavra) => {
  if (palavra.children.length === 0) {
    for (let i = 0; i < novaPalavra.length; i += 1) {
      const letra = document.createElement("div");
      letra.classList.add("letra");
      if (novaPalavra[i] === " ") {
        letra.innerHTML = " ";
      } else {
        letra.innerHTML = "_";
      }
      palavra.appendChild(letra);
    }
  }
};

const novaPalavra = retornaPalavra();
risquinhos(novaPalavra);

console.log(novaPalavra);
window.onkeydown = (event) => {
  const code =
    (event.keyCode >= 65 && event.keyCode <= 90) || event.keyCode === 186
      ? event.key
      : "";
  trocaLetras(novaPalavra, code);
  verificaLetra(novaPalavra, code);
};
