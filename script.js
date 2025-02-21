// Example: Form Submission Handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your message! We will get back to you soon.');
  // You can add AJAX or fetch() here to send the form data to a server.
});
