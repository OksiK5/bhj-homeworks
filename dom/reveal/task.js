function revealOnScroll() {
    const revealElements = document.querySelectorAll('.reveal');
  
    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (elementTop < windowHeight) {
        element.classList.add('reveal_active');
      }
    });
  }
  
  window.addEventListener('scroll', revealOnScroll);