//Validar que cada 3 digitos se ponga una coma
document.addEventListener("DOMContentLoaded", () => {
    //Formatear el input con comas pero permitir las decimales
    const inputPrecio = document.querySelector(".precio");
    inputPrecio.addEventListener("input", (e) => {
        //Mantener digitos y el punto decimal
        let valor = e.target.value.replace(/[^0-9.]/g, "");

        //Separar parte entera y decimal
        let partes = valor.split(".");
        let parteEntera = partes[0];
        let parteDecimal = partes[1] !== undefined ? "." + partes[1] : "";

        //Formatear la parte entera en comas
        if (parteEntera) {
            parteEntera = parseInt(parteEntera, 10).toLocaleString("en-US")
        }
        e.target.value = parteEntera + parteDecimal;
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
    document.getElementById("resultado").textContent = "$" + precioFinal.toLocaleString('en-US', {miniumFractionDigits: 2});
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
