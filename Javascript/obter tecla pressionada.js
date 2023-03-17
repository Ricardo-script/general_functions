const result = document.getElementById('result');

document.addEventListener("keydown", (event) => {
    // Verifica se a tecla pressionada é um número
    if (/^\d$/.test(event.key)) {
        // Insere o valor da tecla pressionada no elemento span
        result.innerText += event.key;
    } else { // se caso for letras
        result.innerText += event.key;
    }
});