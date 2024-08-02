const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');
const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas: [
            {
                texto: "Alternativa 1", 
                afirmação: "Afirmação"
            },
            {
                texto: "Alternativa 2",
            afirmação: "Afirmação"
    }]  
    },

    {
        enunciado: "Pergunta 2",
        alternativas: [
            {
                texto: "Alternativa 1", 
                afirmação: "Afirmação"
            },
            {
                texto: "Alternativa 2",
            afirmação: "Afirmação"
    }]
    },

    {
        enunciado: "Pergunta 3",
        alternativas: [
            {
                texto: "Alternativa 1",
                afirmação: ""
             },
             {
                texto: "Alternativa 2",
            afirmação: ""
    }]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}

function mostraAlternativas() {
   for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = 
    document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
   }
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...bla bla bla bla";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmação;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}
mostraPergunta();