window.onload = function() {
    // areglo de las imágenes para el carrusel  y sus descripciones
    const IMAGENES = [
        { 
            url: 'img/atardecer.jpg',
            desc: 'Atardecer en la playa'
        },
        { 
            url: 'img/paisajes-de-mexico.jpg',
            desc: 'Bonito paisaje México'
        },
        { 
            url: 'img/parque-nacional-banff.jpg',
            desc: 'Parque Nacional Banff - Montañas y lagos'
        }
    ];
    
    const TIEMPO_INTERVALO = 2000;
    let posicionActual = 0;
    let intervalo;

    // Elementos del DOM
    const $botonRetroceder = document.querySelector('#retroceder');
    const $botonAvanzar = document.querySelector('#avanzar');
    const $imagen = document.querySelector('#imagen');
    const $infoImagen = document.querySelector('#info-imagen');
    const $botonPlay = document.querySelector('#play');
    const $stopButton = document.querySelector('#stop');

    // Cambia la imagen hacia adelante usando la utilería
    function pasarFoto() {
        posicionActual = calcularSiguientePosicion(posicionActual, IMAGENES.length);
        renderizarImagen();
    }

    // Cambia la imagen hacia atrás usando la utilería
    function retrocederFoto() {
        posicionActual = calcularAnteriorPosicion(posicionActual, IMAGENES.length);
        renderizarImagen();
    }

    // Actualiza la UI visualmente
    function renderizarImagen() {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual].url})`;
        $infoImagen.textContent = IMAGENES[posicionActual].desc;
    }

    // Controladores de Autoplay
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO);
        
        $botonAvanzar.disabled = true;
        $botonRetroceder.disabled = true;
        $botonPlay.disabled = true;
        $stopButton.disabled = false;
    }

    function stopIntervalo() {
        clearInterval(intervalo);
        intervalo = null; // Reseteamos la variable de control
        
        $botonAvanzar.disabled = false;
        $botonRetroceder.disabled = false;
        $botonPlay.disabled = false;
        $stopButton.disabled = true;
    }

    // Asignación de Eventos
    $botonAvanzar.addEventListener('click', () => {
        if (!intervalo) pasarFoto();
    });
    
    $botonRetroceder.addEventListener('click', () => {
        if (!intervalo) retrocederFoto();
    });
    
    $botonPlay.addEventListener('click', playIntervalo);
    $stopButton.addEventListener('click', stopIntervalo);
    
    // Configuración Inicial de la Aplicación
    renderizarImagen();
    $stopButton.disabled = true;
};