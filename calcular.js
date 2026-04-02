function calcularIVA () {
    let precio = document.querySelectorAll(".precio");
    let porcentajeIVA = document.querySelectorAll(".IVA");
    let IVA_calculado = porcentajeIVA*precio/100;
    let precioFinal = precio + IVA_calculado;


}