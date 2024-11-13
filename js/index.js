document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll('video[data-src]');
  
    const options = {
      root: null,  
      rootMargin: '0px',
      threshold: 0.25  
    };
  
   
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const video = entry.target;
          video.src = video.getAttribute('data-src');
          video.load();  
          observer.unobserve(video);  
        }
      });
    }, options);
  
    videos.forEach(video => {
      observer.observe(video);
    });
  });


  document.addEventListener("DOMContentLoaded", function() {
    // Función para reordenar los trailers
    function reorderTrailers() {
      // Obtener todos los trailers
      const trailers = document.querySelectorAll('.row');
      
      trailers.forEach((trailer) => {
        const video = trailer.querySelector('video');
        const text = trailer.querySelector('.titleParLeft, .titleParRight');
        
        if (window.innerWidth <= 768) {
          // En pantallas pequeñas, el video debe ir antes que el texto
          trailer.insertBefore(video.parentElement, text.parentElement);
        } else {
          // En pantallas grandes, el texto debe ir antes que el video
          trailer.appendChild(text.parentElement);
          trailer.appendChild(video.parentElement);
        }
      });
    }
    
    // Llamamos a la función al cargar la página y cada vez que se redimensiona la ventana
    reorderTrailers();
    window.addEventListener('resize', reorderTrailers);
  });
  



  document.addEventListener("DOMContentLoaded", function () {
    const textElements = document.querySelectorAll(".animated-text");
  
    textElements.forEach((textElement) => {
      const text = textElement.textContent; // Obtiene el texto original
      textElement.innerHTML = ""; // Limpia el contenido original
  
      // Envuelve cada letra en un <span>
      [...text].forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter; // Asigna la letra al span
        textElement.appendChild(span);
  
        // Animación en bucle infinito
        setInterval(() => {
          setTimeout(() => {
            span.classList.add("active");
          }, index * 200); // Retraso progresivo por letra
  
          setTimeout(() => {
            span.classList.remove("active");
          }, index * 200 + 500); // Remueve el efecto después de 500ms
        }, 2000); // Repite cada 2 segundos
      });
    });
  });
  