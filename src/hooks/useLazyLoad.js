import { useEffect } from 'react';

export default function useLazyLoad(query) {
  useEffect(() => {
    const targets = document.querySelectorAll(query);
    const options = {
      threshold: 0.5,
    };
    // This code will be refactored in the future.
    const lazyLoad = (target) => {
      const io = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const { parentElement } = img.parentElement;
            if (parentElement.dataset['cardItem']) {
              parentElement.classList.remove('invisible');
              parentElement.classList.add('animate__fadeIn');
            } else img.classList.add('animate__fadeIn');
            const src = img.getAttribute('data-lazy');
            img.setAttribute('src', src);
          }
        });
        observer.observe(target);
      }, options);
      io.observe(target);
    };
    targets.forEach(lazyLoad);
  }, [query]);
}
