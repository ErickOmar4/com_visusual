/** Calcula la siguiente posición del carrusel. Si llega al final del array, reinicia a 0.*/
function calcularSiguientePosicion(posicionActual, totalImagenes) {
    return (posicionActual >= totalImagenes - 1) ? 0 : posicionActual + 1;
}

/*Calcula la posición anterior del carrusel. Si está en el índice 0, salta al último elemento.*/
function calcularAnteriorPosicion(posicionActual, totalImagenes) {
    return (posicionActual <= 0) ? totalImagenes - 1 : posicionActual - 1;
}