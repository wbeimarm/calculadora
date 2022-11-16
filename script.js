function sumar() {
    let valor1 = Number(document.getElementById("valor1").value);
    let valor2 = Number(document.getElementById("valor2").value);
    let resultado = valor1 + valor2;

    document.getElementById("resultado").value = resultado;
}

function reiniciar() {
	location.reload(true);
}
