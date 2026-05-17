/* =========================
   KLAVIYO FORM INTEGRATION
========================= */

const contactForm = document.getElementById('contactForm');
const formStatus = document.querySelector('.form-status');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.querySelector('#contactForm [name="name"]').value;
    const email = document.querySelector('#contactForm [name="email"]').value;
    const subject = document.querySelector('#contactForm [name="subject"]').value;
    const message = document.querySelector('#contactForm [name="message"]').value;

    /* =========================
        IDENTIFY USER
    ========================= */

    window._learnq = window._learnq || [];

    window._learnq.push([
        'identify',
        {
            $email: email,
            $first_name: name,
            subject: subject,
            message: message,
            source: 'Portfolio Website'
        }
    ]);

    /* =========================
        TRACK EVENT
    ========================= */

    window._learnq.push([
        'track',
        'Portfolio Contact Form Submitted',
        {
        Name: name,
        Email: email,
        Subject: subject,
        Message: message,
        Source: 'Portfolio Website'
        }
    ]);

    /* =========================
        SUCCESS UI
    ========================= */

    formStatus.innerHTML = 'Message sent successfully 🚀';
    formStatus.style.color = '#18f2c2';
    contactForm.reset();
});