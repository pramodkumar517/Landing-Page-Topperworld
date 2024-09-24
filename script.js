// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', event => {
    event.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mobile Navigation Toggle (Optional for Responsive Menu)
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('nav ul');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Form Validation (if a form is present)
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', event => {
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');

    // Validate inputs
    if (!name.value || !email.value || !message.value) {
      alert('Please fill in all fields');
      event.preventDefault();
    } else if (!validateEmail(email.value)) {
      alert('Please enter a valid email');
      event.preventDefault();
    }
  });
}

// Helper Function to Validate Email
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());
}

// Lazy Loading for Images (Optional)
document.addEventListener('DOMContentLoaded', () => {
  const lazyImages = document.querySelectorAll('img.lazy');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach(image => imageObserver.observe(image));
});

// A/B Testing Example: Tracking CTA Button Clicks (Optional)
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
  ctaButton.addEventListener('click', () => {
    console.log('CTA Button clicked');
    // Replace with actual tracking code
  });
}
