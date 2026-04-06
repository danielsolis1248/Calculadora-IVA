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
    //Variables del precio y el portentaje de IVA
    let precio = document.querySelector('.precio');
    let porcentajeIVA = document.querySelector('.IVA');
    
    //Variable para almacenar el IVA del precio original
    let IVA_calculado = porcentajeIVA*precio/100;
    
    //Operacion para añadir el IVA al producto
    let precioFinal = precio + IVA_calculado;

    //Mostrar el resultado en el modal
    document.getElementById("resultado").textContent = "El precio final de tu producto con IVA es: " + precioFinal;
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
