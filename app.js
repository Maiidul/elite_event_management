document.addEventListener('DOMContentLoaded', () => {
  // Safe initialization for lightbox
  try {
    if (typeof lightbox !== 'undefined') {
      lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'disableScrolling': true,
        'fadeDuration': 300
      });
    }
  } catch (error) {
    console.error('Lightbox initialization error:', error);
  }

  // Safe initialization for AOS
  try {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1000,
        once: true
      });
    }
  } catch (error) {
    console.error('AOS initialization error:', error);
  }

  // Contact Form Handling
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Basic form validation
      const inputs = contactForm.querySelectorAll('input, select, textarea');
      let isValid = true;
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = 'red';
        } else {
          input.style.borderColor = '#ddd';
        }
      });
      
      if (isValid) {
        // In a real-world scenario, you'd send this to a backend
        alert('Thank you for your inquiry! We will contact you soon.');
        contactForm.reset();
      }
    });
  }

  // Safe smooth scrolling for navigation
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      try {
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        } else {
          console.warn(`Target element ${targetId} not found`);
        }
      } catch (error) {
        console.error('Smooth scroll error:', error);
      }
    });
  });

  // Testimonials Swiper Initialization
  try {
    if (typeof Swiper !== 'undefined') {
      new Swiper('.testimonial-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        }
      });
    }
  } catch (error) {
    console.error('Swiper initialization error:', error);
  }
});