document.getElementById("normall").addEventListener("click", function() {
    alert("Seleccionaste el Modo normal!");
});

document.getElementById("dificill").addEventListener("click", function() {
    alert("Seleccionaste el Modo dificil!");
});

function dificultades(mode) {
    if (mode === 'normal') {
        window.location.href = '../juego.html'; 
    } else if (mode === 'dificil') {
        window.location.href = 'difficult-game.html'; 
    }
}

function ayuda(mode){
    if(mode==='apretar'){
        window.location.href = '../ayuda.html';
    }
}
