// Detectamos cuando el video está a punto de entrar en la vista
document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll('video[data-src]');
  
    const options = {
      root: null,  // 'null' significa que usaremos el viewport (ventana del navegador)
      rootMargin: '0px',
      threshold: 0.25  // Cargar cuando el video esté al menos al 25% en la ventana
    };
  
    // Creamos el observer para detectar la visibilidad del video
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Cuando el video esté en vista, cambiamos el 'data-src' por 'src' y cargamos el video
          const video = entry.target;
          video.src = video.getAttribute('data-src');
          video.load();  // Esto inicia la carga del video
          observer.unobserve(video);  // Dejamos de observar este video
        }
      });
    }, options);
  
    // Comenzamos a observar todos los videos
    videos.forEach(video => {
      observer.observe(video);
    });
  });