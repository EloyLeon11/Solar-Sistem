// Variables para controlar el movimiento y la rotación
var moving = false;
var moveInterval;
var looking = false;

function startMove(direction) {
  moving = true;
  moveInterval = setInterval(function() {
    move(direction);
  }, 50); // Ajusta la velocidad de movimiento aquí
}

function stopMove() {
  moving = false;
  clearInterval(moveInterval);
}

function move(direction) {
  var camera = document.querySelector('[camera]');
  var currentPosition = camera.getAttribute('position');
  var newPosition = { x: currentPosition.x, y: currentPosition.y, z: currentPosition.z };

  switch (direction) {
    case 'arriba':
      newPosition.z -= 1; // Ajusta la velocidad de movimiento aquí
      break;
    case 'abajo':
      newPosition.z += 1; // Ajusta la velocidad de movimiento aquí
      break;
    case 'izquierda':
      newPosition.x -= 1; // Ajusta la velocidad de movimiento aquí
      break;
    case 'derecha':
      newPosition.x += 1; // Ajusta la velocidad de movimiento aquí
      break;
  }

  camera.setAttribute('position', newPosition);
}

// Función para iniciar el movimiento de la vista
function startLook() {
  looking = true;
  var camera = document.querySelector('[camera]');
  var initialRotation = camera.getAttribute('rotation');
  var lastY;

  document.addEventListener('touchmove', function(e) {
    if (looking) {
      var deltaY = e.touches[0].clientY - lastY;
      var newRotationX = initialRotation.x - deltaY * 0.1; // Ajusta la velocidad de rotación aquí
      camera.setAttribute('rotation', { x: newRotationX, y: initialRotation.y, z: initialRotation.z });
    }
    lastY = e.touches[0].clientY;
  });
}

// Función para detener el movimiento de la vista
function stopLook() {
  looking = false;
}

// Manejar eventos táctiles para las flechas
document.getElementById('arriba').addEventListener('touchstart', function() {
  startMove('arriba');
});
document.getElementById('abajo').addEventListener('touchstart', function() {
  startMove('abajo');
});
document.getElementById('izquierda').addEventListener('touchstart', function() {
  startMove('izquierda');
});
document.getElementById('derecha').addEventListener('touchstart', function() {
  startMove('derecha');
});

document.getElementById('arriba').addEventListener('touchend', stopMove);
document.getElementById('abajo').addEventListener('touchend', stopMove);
document.getElementById('izquierda').addEventListener('touchend', stopMove);
document.getElementById('derecha').addEventListener('touchend', stopMove);

