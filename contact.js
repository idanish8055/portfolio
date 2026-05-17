/* =========================
   KLAVIYO FORM INTEGRATION
========================= */

const contactForm = document.getElementById('contactForm');
const formStatus = document.querySelector('.form-status');

contactForm.addEventListener('submit', async function(e) {
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

    try {

        const response = await fetch(
        'https://a.klaviyo.com/client/profiles/?company_id=TjBuVx',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: {
                    type: 'profile',
                    attributes: {
                        email: email,
                        first_name: name,
                        properties: {
                            subject: subject,
                            message: message,
                            source: 'Portfolio Website'
                        }
                    }
                }
            })

        });

        if (response.ok) {
            formStatus.innerHTML = 'Message sent successfully 🚀';
            formStatus.style.color = '#18f2c2';
            contactForm.reset();
            setTimeout(()=>{
                formStatus.innerHTML = '';
            }, 5000);
        } else {
            const errorData = await response.json();
            console.log(errorData);
            formStatus.innerHTML = 'Something went wrong ❌';
            setTimeout(()=>{
                formStatus.innerHTML = '';
            }, 6000);
        }
    } catch (error) {
        console.log(error);
        formStatus.innerHTML = 'Network error ❌';
        setTimeout(()=>{
            formStatus.innerHTML = '';
        }, 6000);
    }
});