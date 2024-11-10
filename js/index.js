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