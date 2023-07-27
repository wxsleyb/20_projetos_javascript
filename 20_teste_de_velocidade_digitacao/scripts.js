const texto = document.querySelector("#texto")
const entrada = document.querySelector("#entrada")
const reiniciar = document.querySelector("#reiniciar")
const resultado = document.querySelector("#resultado")
const historico = document.querySelector("#historico")
const alternarTemaBtn = document.querySelector("#alternarTema")


async function pegarTextos() {
    try {
      const response = await fetch("textos.json");
      if (!response.ok) {
        throw new Error("Falha ao carregar o arquivo textos.json");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

async function novoTexto() {
    const textos = await pegarTextos();
    const index = Math.floor(Math.random() * textos.length);
    texto.textContent = textos[index];
}

function atualizarTeste(){
    iniciar();

    if(entrada.value === texto.textContent){
        verificar();
    }
}

function iniciar() {
    const statusDoTeste = JSON.parse(localStorage.getItem("testeEmAndamento"));
  
    if (!statusDoTeste) {
      localStorage.setItem("tempoInicial", new Date().getTime());
      localStorage.setItem("testeEmAndamento", true);
    }
  }

function verificar() {
    const tempoFinal = new Date().getTime();
    const tempoGasto =
      (tempoFinal - parseInt(localStorage.getItem("tempoInicial"))) / 1000;
    resultado.textContent = `Parabéns! Você levou ${tempoGasto} segundos.`;
    // Incrementar histórico de pontuações
    adicionarAoHistorico(texto.textContent, tempoGasto);
  
    localStorage.setItem("testeEmAndamento", false);
    entrada.value = "";
    novoTexto();
}

function adicionarAoHistorico(textoDigitado, tempoGasto){
    const itemHistorico = document.createElement("p")
    itemHistorico.textContent = `Texto "${textoDigitado}" - Tempo: ${tempoGasto}`
    historico.appendChild(itemHistorico);
}    

function reiniciarTeste(){
    entrada.value = ""
    resultado.textContent = ""
    novoTexto()
    localStorage.setItem("testeEmAndamento", false);
    historico.innerHTML = ""
}

function alternarTema(){
    const body = document.body;

    body.classList.toggle("claro");
    body.classList.toggle("escuro");

}

entrada.addEventListener("keyup", atualizarTeste)

reiniciar.addEventListener("click", reiniciarTeste)

alternarTemaBtn.addEventListener("click", alternarTema);
novoTexto();


  
