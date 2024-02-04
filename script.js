document.getElementById('contactBtn').addEventListener('click', function () {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Message sent! We will get back to you soon.');
    // You can add backend logic to handle the form data.
});
