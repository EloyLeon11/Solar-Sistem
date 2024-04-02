
  var sound = document.querySelector('#music');
  var muteButton = document.querySelector('#muteButton');

  muteButton.addEventListener('click', function() {
    if (sound.getAttribute('volume') === '0') {
      sound.setAttribute('volume', '40'); // Establecer volumen a la mitad (0.5)
      muteButton.textContent = 'Mutear';
    } else {
      sound.setAttribute('volume', '0'); // Silenciar el sonido
      muteButton.textContent = 'Desmutear ';
    }
  });


