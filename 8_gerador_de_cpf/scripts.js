const cpfEl = document.getElementById("cpf");
const gerarCpfBtn = document.getElementById("gerar-cpf");
const copiarCpfBtn = document.getElementById("copiar-cpf");
const validaCpfBtn = document.getElementById("valida-cpf");
const cpfInput = document.getElementById("cpf-input");

function gerarCPF() {
    let n = Math.floor(Math.random() * 999999999) + 1;
    let nStr = n.toString().padStart(9, "0");
    let dv1 = calcularDV(nStr, 10);
    let dv2 = calcularDV(nStr + dv1, 11);
  
    const cpf = formatarCPF(nStr + dv1 + dv2);
    const isValidCPF = validarCPF(cpf);
  
    cpfEl.innerText = cpf //+ (isValidCPF ? " (Válido)" : " (Inválido)");
  }

function calcularDV(numero, peso){
    let total = 0;
    for(let i =0; i<numero.length; i++){
        total += parseInt(numero.charAt(i)) * peso--;
    }

    let resto = total % 11;
    return resto < 2 ? 0 : 11 - resto;
}

function formatarCPF(cpf){
    const cpfRegex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
    return cpf.replace(cpfRegex, "$1.$2.$3-$4");
    }

function copiarCPF(){
    const cpf = cpfEl.innerText;
    navigator.clipboard.writeText(cpf).then(
        ()=>{
        alert(`CPF: ${cpf} copiado para a área de transferência.`)
    },
    (err)=>{
        console.log("Erro ao copiar CPF: ", err)
    });
}

function validarCPF(cpf) {
    const cpfRegex = /^(\d{3})\.?(\d{3})\.?(\d{3})-?(\d{2})$/; // Aceita formatos diferentes
    const cpfDigits = cpf.replace(/\D/g, ''); // Remove non-digit characters
  
    if (!cpfRegex.test(cpf)) {
      return false;
    }
  
    if (cpfDigits.length !== 11) {
      return false;
    }
  
    // Check if all digits are the same (e.g., 000.000.000-00)
    if (/^(\d)\1{10}$/.test(cpfDigits)) {
      return false;
    }
  
    // Calculate verification digits
    let total = 0;
    for (let i = 0; i < 9; i++) {
      total += parseInt(cpfDigits.charAt(i)) * (10 - i);
    }
  
    let resto = total % 11;
    let dv1 = resto < 2 ? 0 : 11 - resto;
  
    if (dv1 !== parseInt(cpfDigits.charAt(9))) {
      return false;
    }
  
    total = 0;
    for (let i = 0; i < 10; i++) {
      total += parseInt(cpfDigits.charAt(i)) * (11 - i);
    }
  
    resto = total % 11;
    let dv2 = resto < 2 ? 0 : 11 - resto;
  
    return dv2 === parseInt(cpfDigits.charAt(10));
  }
  

function validarCPFDigitado() {
    const cpfDigitado = cpfInput.value.replace(/\D/g, ''); // Remove non-digit characters
    const isValidCPF = validarCPF(cpfDigitado);

    const formattedCPF = formatarCPF(cpfDigitado);
    cpfEl.innerText = formattedCPF + (isValidCPF ? " (Válido)" : " (Inválido)");
}

gerarCpfBtn.addEventListener("click", gerarCPF);
copiarCpfBtn.addEventListener("click", copiarCPF);
validaCpfBtn.addEventListener("click", validarCPFDigitado); // Chama a função para validar o CPF digitado