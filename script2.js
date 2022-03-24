// CAPTAÇÃO DE OBJETOS HTML -------------------------------------
const btnTryAgain = document.getElementById('try-again');
const palavraH = document.getElementById('palavra');
const letras = document.getElementsByClassName('letra');
const boneco = document.getElementsByClassName('boneco')[0];
const dica = document.getElementById("dica");

const cabeca = boneco.children[0];
const meio = boneco.children[1].children;
const bracoEsquerdo = meio[0];
const tronco = meio[1];
const bracoDireito = meio[2];
const pernas = boneco.children[2].children;
const pernaEsquerda = pernas[0];
const pernaDireita = pernas[1];

const corpo = [
    cabeca,
    tronco,
    bracoEsquerdo,
    bracoDireito,
    pernaEsquerda,
    pernaDireita,
  ]

// VARIAVEIS DE CONTROLE ---------------------------------------
let tema = '';
let palavra = '';
let riscos = [];
let textRiscos = '';
let iErro = 0;
let letrasTentadas = ''
let ok = true;

// FUNÇÕES -----------------------------------------------------
function sorteia() {
    riscos = [] //limpa os riscos
    var i = 0
    var j = 0
    //soteia a palavra
    i = Math.floor(Math.random() * lista.length)
    tema = lista[i][0]
    j = Math.floor(Math.random() * lista[i][1].length)
    palavra = lista[i][1][j]
    dica.innerHTML =tema; //joga o tema na tela

    console.log(tema)
    textRiscos = ''
    for (let i = 0; i < palavra.length; i ++) {
        
        if (palavra[i] === ' ') {
            riscos.push('  ');
        } else {
            riscos.push('_');
        }
      }
    console.log(riscos)
    apresentaPalavra()
};

function verificaLetra(code) {
    var x = false
    
    for (let i = 0; i < palavra.length; i++) {
        if (code.toLowerCase() == palavra.substring(i,(i+1)).toLowerCase()){
            riscos[i] = palavra.substring(i,(i+1))
            
            x = true 
        }
    }

    if (!(riscos.includes('_'))){
        console.log(riscos)
        ok = false
        return console.log('Parabéns, você venceu!');
        
    }

    if (!(x)){
        corpo[iErro].classList.add('show')
        iErro ++
        if (iErro == 6){
            ok = false
            return console.log('Você Perdeu! Tente outra vez.');
        }
    }else{
        console.log(riscos)
        apresentaPalavra()
    }
    
}

function apresentaPalavra(){
    palavraH.innerHTML = ''
    let letra = document.createElement('div')
    for (let i = 0; i < riscos.length; i++) {
        
        if (riscos[i] == '  '){
            letra.innerHTML = `&nbsp`
        }else {letra.innerHTML = riscos[i];}
        palavraH.appendChild(letra);
    }
    


}


// ARRAYS ----------------------------------------------------------
const lista = [
    //[tema[palavras]]
    ['País',['Brasil','Estados Unidos']],
    ['Animal',['cachorro','peixe boi']],
    ['Fruta',['uva passa','goiaba']],
]

// Classes ---------------------------------------------------------


// EVENTOS ---------------------------------------------------------

btnTryAgain.onclick = () => {
    iErro = 0
    ok = true
    letrasTentadas = ''
    cabeca.classList.remove('show')
    tronco.classList.remove('show')
    bracoEsquerdo.classList.remove('show')
    bracoDireito.classList.remove('show')
    pernaEsquerda.classList.remove('show')
    pernaDireita.classList.remove('show')
    sorteia()
    
  }


  window.onkeydown = (event) => {
    if (ok){
        const code = event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode === 186 ? event.key : '';

        if (code == '') {
            return
        }
        if (letrasTentadas.indexOf(code) !== -1){
            console.log(`A letra "${code}" já foi testada. Tente outra letra.`);
        }else {
            letrasTentadas += code
            verificaLetra(code)
        }
    }
  }


  sorteia()