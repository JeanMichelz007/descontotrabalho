const formulario = document.getElementById('formularioDesconto');
const inputCompra = document.getElementById('compra');

formulario.addEventListener('submit', (event) => {
    event.preventDefault(); 
    
    var valorCompra = parseFloat(inputCompra.value) || 0;
    var percentualDesconto = 0;

    if (valorCompra > 500) {
        percentualDesconto = 0.10;
    }
    else if (valorCompra > 100) {
        percentualDesconto = 0.05;
    }
    else {
        percentualDesconto = 0;
    }

    var valorDesconto = valorCompra * percentualDesconto;
    var valorFinal = valorCompra - valorDesconto;

    document.getElementById('txtOriginal').textContent = "R$ " + valorCompra.toFixed(2);
    document.getElementById('txtDesconto').textContent = "R$ " + valorDesconto.toFixed(2) + " (" + (percentualDesconto * 100) + "%)";
    document.getElementById('txtTotal').textContent = "R$ " + valorFinal.toFixed(2);
});