import { useEffect } from 'react';

export default function useLazyLoad(query) {
  useEffect(() => {
    const targets = document.querySelectorAll(query);
    const options = {
      threshold: 0.5
    }
    const lazyLoad = (target) => {
      const io = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute('data-lazy');
            img.setAttribute('src', src);
            img.classList.add('animate__fadeIn');      
          }
        });
        observer.observe(target);
      },options);
      io.observe(target)
    };
    targets.forEach(lazyLoad)
  }, [query]);
}
