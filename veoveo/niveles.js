/*
  NIVELES.js — tus propias fotos 360 para Veo Veo 360°.

  Deja el array vacío (como está ahora) y el juego usa el modo demo
  con objetos 3D generados automáticamente.

  Para usar tus propias fotos:
    1. Abre el juego y pulsa "¿Quieres usar tus propias fotos 360?
       Abre el editor de niveles" en la pantalla de inicio.
    2. Pega la URL de tu foto (debe ser una imagen equirectangular,
       proporción 2:1, alojada donde sea accesible públicamente —
       por ejemplo dentro de tu propio repo, en una carpeta
       "veoveo/panos/").
    3. Escribe la palabra que hay que adivinar.
    4. Arrastra para mirar alrededor y haz click justo encima del
       objeto. El editor calcula el punto exacto (yaw/pitch).
    5. Pulsa "Añadir este nivel a la lista" y luego "Copiar código".
    6. Pega el código copiado aquí abajo, dentro del array NIVELES.

  Cada nivel tiene esta forma:
    { image: "panos/mi-foto.jpg", word: "SEMAFORO", yaw: 42.3, pitch: -6.1 },

  Puedes repetir el proceso varias veces sobre la MISMA foto para
  marcar varios objetos distintos en ella (cada uno como un nivel
  independiente), y también cargar fotos distintas.
*/

var NIVELES = [
  // Pega aquí tus niveles generados con el editor, por ejemplo:
  // { image: "panos/salon.jpg", word: "LAMPARA", yaw: 12.4, pitch: 3.2 },
  // { image: "panos/salon.jpg", word: "SOFA", yaw: -88.0, pitch: -10.5 },
  // { image: "panos/parque.jpg", word: "BANCO", yaw: 150.0, pitch: -15.0 },
];
