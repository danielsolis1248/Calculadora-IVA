//Validar que cada 3 digitos se ponga una coma
document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector(".precio");
    input.addEventListener('input', (e) => {
        let valor = e.target.value.replace(/\D/g, "");
        if (valor) {
            valor = parseInt(valor).toLocaleString('en-US');
        }
        e.target.value = valor;
    });
});

//Funcion para calcular el IVA
function calcularIVA () {
    //Obtener valores de comas y limpiar
    let precioString = document.querySelector('.precio').value.replace(/,/g, "");
    let IVAString = document.querySelector('.IVA').value.replace(/,/g, "");

    //Variables del precio y el portentaje de IVA
    let precio = parseFloat(precioString);
    let porcentajeIVA = parseFloat(IVAString);

    //Validacion de que sean numeros
    if(isNaN(precio) || isNaN(porcentajeIVA)) {
        alert("Ingresa valores validos en ambos campos");
        return;
    }

    //Variable para almacenar el IVA del precio original
    let IVA_calculado = precio * (porcentajeIVA / 100);
    
    //Operacion para añadir el IVA al producto
    let precioFinal = precio + IVA_calculado;

    //Mostrar el resultado en el modal
    document.getElementById("resultado").textContent = "El precio final de tu producto con IVA es: $" + precioFinal.toLocaleString('en-US', {miniumFractionDigits: 2});
    document.getElementById("modal").style.display = "block";
}

//Funcion para limpiar los campos de texto
function limpiarCampos() {
    document.querySelectorAll("input").forEach(input => input.value = "");    
}

//Funcion para cerrar modal
function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}
