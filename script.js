
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add ('active');
            })
        }

    })
}

// Load EmailJS
emailjs.init('1hk6uuy2GqUu4JqEh'); // Replace with your actual public key.

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default submission.

    const serviceID = 'service_omkizml'; // Replace with your actual service ID.
    const templateID = 'template_qs5km4d'; // Replace with your actual template ID.

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            document.getElementById('responseMessage').textContent = 'Message sent successfully!';
            this.reset(); // Clear the form.
        }, (error) => {
            document.getElementById('responseMessage').textContent = 'Failed to send message. Try again.';
            console.error('EmailJS Error:', error);
        });
});

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
