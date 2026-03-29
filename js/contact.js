// contact.js — form handling

const form = document.getElementById('contactForm');
const successBox = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = form.querySelector('.form-submit span');
    btn.textContent = 'Sending...';

    // Simulate send (replace with Formspree/Netlify Forms/EmailJS later)
    setTimeout(() => {
      form.style.display = 'none';
      successBox.style.display = 'block';
    }, 1000);
  });
}

// To use Formspree (free, no server needed):
// 1. Sign up at formspree.io
// 2. Create a new form → get your endpoint URL
// 3. Change the form tag to: <form action="https://formspree.io/f/YOUR_ID" method="POST">
// 4. Remove the JS submit handler above
