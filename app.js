let listaDeNuemrosSorteados = [];
let numeroLimite = 100;
let nuemroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirNomeNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
};

function exibirMensagemInicial (){
    exibirNomeNaTela("h1", "Jogo do núemro secreto")
    exibirNomeNaTela("p", `Escolha um número entre 1 e ${numeroLimite}`)
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;
    let palavraTentativa = tentativas > 1 ? "tentaivas" : "tentativa";
    let mensagemTentaivas = `Você descobriu o número secreto ${nuemroSecreto} com ${tentativas} ${palavraTentativa}!`
    if (chute == nuemroSecreto){
        exibirNomeNaTela("h1", "Acertou!");
        exibirNomeNaTela("p", mensagemTentaivas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else if (chute > nuemroSecreto) {
        exibirNomeNaTela("p", "O número secreto é menor.");
    } else {
        exibirNomeNaTela("p", "O número secreto é maior.");
    }
        tentativas ++;
        limparCampo();
};

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); 
    let quantidadeDeElementosNaLista = listaDeNuemrosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNuemrosSorteados = [];
    }

    if (listaDeNuemrosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNuemrosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo () {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo (){
    nuemroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true)
}
