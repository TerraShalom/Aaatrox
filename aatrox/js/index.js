   // Función que actualiza el video source
    function playAbilityVideo(videoSrc) {
        const videoElement = document.getElementById('ability-video');
        const sourceElement = videoElement.querySelector('source');
        sourceElement.src = videoSrc;
        videoElement.load(); // Recarga el video para aplicar el nuevo source
        videoElement.play(); // Reproduce el video
    }

    // Eventos para cada habilidad
    document.querySelector('.card-title img[alt="Ícono Habilidad Q"]').addEventListener('click', function() {
        playAbilityVideo('./video/ability_0266_Q1.mp4');
    });

    document.querySelector('.card-title img[alt="Ícono Habilidad W"]').addEventListener('click', function() {
        playAbilityVideo('./video/ability_0266_W1.mp4');
    });

    document.querySelector('.card-title img[alt="Ícono Habilidad E"]').addEventListener('click', function() {
        playAbilityVideo('./video/ability_0266_E1.mp4');
    });

    document.querySelector('.card-title img[alt="Ícono Ultimate"]').addEventListener('click', function() {
        playAbilityVideo('./video/ability_0266_R1.mp4');
    });

