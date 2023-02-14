function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    
    if (elemento /*!= null */ && elemento.localName === 'audio') {
         elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido'); //ou alert
    }
} 

// document.querySelector('.tecla_pom').onclick = tocaSomPom;

const listaDeTeclas = document.querySelectorAll('.tecla'); 

let contador = 0


// // Enquanto
// while (contador < listaDeTeclas.length) { 

//     const tecla = listaDeTeclas[contador];
//     const instrumento = tecla.classList[1];

//     // template string
//     const idAudio = `#som_${instrumento}`;
//     // console.log(idAudio);

//     tecla.onclick = function() {  // função anonima
//         tocaSom(idAudio);
//     }

//     contador = contador + 1; 
//     // console.log(contador);
// }

// jeito bonito
for (let contator = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; 

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) { // condição para pressionar teclas específicas. 
        // console.log(evento.code);
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () { // condição para deixar de pressionar as teclas específicas. 
        tecla.classList.remove('ativa');
    }
}