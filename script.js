document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Toggle mobile menu
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('showing');
    });

    // Form validation for payment page
    const paymentForm = document.querySelector('form');

    if (paymentForm) {
        paymentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const amount = document.getElementById('amount').value;

            if (name === '' || email === '' || amount === '') {
                alert('Please fill in all fields');
            } else {
                // For demonstration, we're just logging the values.
                console.log('Name:', name);
                console.log('Email:', email);
                console.log('Amount:', amount);
                alert('Payment submitted successfully!');
                // Here you would normally handle the form submission, e.g., sending the data to a server.
                paymentForm.reset();
            }
        });
    }
});
