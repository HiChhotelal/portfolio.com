// Smooth Scroll for Navbar Links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to Specific Section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    let statusMessage = '';

    if (!fullName || !email || !phone || !subject || !message) {
        statusMessage = "All fields are required!";
    } else {
        statusMessage = `Thanks, ${fullName}! Your message has been sent.`;
    }

    document.getElementById('statusMessage').innerText = statusMessage;
});

// Example Hire Me Button Action
function hireMe() {
    alert('Thank you for showing interest! Please use the contact form to get in touch.');
}
