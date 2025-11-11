/**
 * Contact Form Handler using Formspree
 * 
 * This form is configured to use Formspree.io
 * Form endpoint: https://formspree.io/f/mzzybrvg
 */

(function() {
  "use strict";

  // Get all contact forms
  const forms = document.querySelectorAll('.contact-form');

  forms.forEach(function(form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const thisForm = this;
      const submitButton = thisForm.querySelector('button[type="submit"]');
      const formAction = thisForm.getAttribute('action');
      const loadingEl = thisForm.querySelector('.loading');
      const errorEl = thisForm.querySelector('.error-message');
      const sentEl = thisForm.querySelector('.sent-message');
      
      // Hide all messages and show loading state
      loadingEl.style.display = 'block';
      errorEl.style.display = 'none';
      sentEl.style.display = 'none';
      submitButton.disabled = true;

      // Get form data
      const formData = new FormData(thisForm);

      // Submit to Formspree
      fetch(formAction, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
        .then(function(response) {
          if (response.ok) {
            // Success
            loadingEl.style.display = 'none';
            sentEl.style.display = 'block';
            thisForm.reset();
            submitButton.disabled = false;
          } else {
            // Error response
            return response.json().then(function(data) {
              throw new Error(data.error || 'Failed to send message. Please try again.');
            });
          }
        })
        .catch(function(error) {
          // Error
          displayError(thisForm, error.message || 'Failed to send message. Please try again or contact me directly.');
          console.error('Formspree Error:', error);
          submitButton.disabled = false;
        });
    });
  });

  function displayError(form, error) {
    const loadingEl = form.querySelector('.loading');
    const errorEl = form.querySelector('.error-message');
    loadingEl.style.display = 'none';
    errorEl.innerHTML = error;
    errorEl.style.display = 'block';
  }

})();
