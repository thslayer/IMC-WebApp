function updatePeso(valor) {
    document.getElementById("pesoLabel").textContent = valor;
}

function updateAltura(valor) {
    document.getElementById("alturaLabel").textContent = valor;
}

function calcularIMC() {
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;

    if (altura > 0) {
        const alturaMetros = altura / 100;
        const imc = peso / (alturaMetros * alturaMetros);
        document.getElementById("resultado").textContent = Seu IMC é: ${imc.toFixed(2)};
    } else {
        document.getElementById("resultado").textContent = "Por favor, selecione uma altura válida.";
    }
}
