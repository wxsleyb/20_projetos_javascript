// Selecionar os elementos

const inputElement = document.querySelector("#input")
const fromElement = document.querySelector("#from")
const toElement = document.querySelector("#to")
const outputElement = document.querySelector("#output")
const convertButton = document.querySelector("#convert-btn")
const messageElement = document.querySelector("#message")


// função para converter as unidades
function convert(){
    const fromValue = fromElement.value;
    const toValue = toElement.value;

    if(fromValue === toValue){
        outputElement.value = inputElement.value;
        messageElement.textContent="";
        return;
    }

    //converter a entrada para metros
    let meters;
    switch(fromValue){
        case "m":
            meters = inputElement.value
            break
        case "km":
            meters = inputElement.value * 1000
            break
        case "hm":
            meters = inputElement.value * 100
            break
        case "dam":
            meters = inputElement.value * 10
            break
        case "dm":
            meters = inputElement.value / 10 
            break                       
        case "cm":
            meters = inputElement.value / 100 
            break
        case "mm":
            meters = inputElement.value / 1000
            break         
    }

    //converter metros para a unidade de saída

    let result;
    switch(toValue){
        case "m":
            result = meters
            break
        case "km":
            result = meters * 1000
            break
        case "hm":
            result = meters * 100
            break
        case "dam":
            result = meters * 10
            break
        case "dm":
            result = meters / 10 
            break                       
        case "cm":
            result = meters / 100 
            break
        case "mm":
            result = meters / 1000
            break         
    }
    // Exibir resultado no input
    outputElement.value = result;

    const fromLabel = fromElement.options[fromElement.selectedIndex].text

    const toLabel = toElement.options[toElement.selectedIndex].text

    const message = `${inputElement.value} ${fromLabel} equivalem a ${result} ${toLabel}`;

    messageElement.textContent = message;
    return;

    //console.log(fromValue, toValue);
    //console.log(meters, result);
}

convertButton.addEventListener("click", convert);