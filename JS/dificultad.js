document.getElementById("normall").addEventListener("click", function() {
    alert("Seleccionaste el Modo normal!");
});

document.getElementById("dificill").addEventListener("click", function() {
    alert("Seleccionaste el Modo dificil!");
});

function dificultades(mode) {
    if (mode === 'normal') {
        window.location.href = 'normal-game.html'; // Replace 'normal-game.html' with the actual URL of your normal game page
    } else if (mode === 'dificil') {
        window.location.href = 'difficult-game.html'; // Replace 'difficult-game.html' with the actual URL of your difficult game page
    }
}