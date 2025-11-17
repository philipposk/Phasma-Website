// Shop page form handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const formMessage = document.getElementById('form-message');

    // Validate that at least phone or email is filled
    function validateContactInfo() {
        const phone = phoneInput.value.trim();
        const email = emailInput.value.trim();
        
        if (!phone && !email) {
            return false;
        }
        return true;
    }

    // Validate email format
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Validate phone format (Greek phone numbers)
    function validatePhone(phone) {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    }

    // Show form message
    function showMessage(message, type = 'success') {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        
        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Hide message after 5 seconds for success
        if (type === 'success') {
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Reset message
        formMessage.style.display = 'none';

        // Validate contact info
        if (!validateContactInfo()) {
            showMessage('Παρακαλώ συμπληρώστε τουλάχιστον ένα από τα δύο (τηλέφωνο ή email).', 'error');
            if (!phoneInput.value.trim()) {
                phoneInput.focus();
            } else {
                emailInput.focus();
            }
            return;
        }

        // Validate email if provided
        const email = emailInput.value.trim();
        if (email && !validateEmail(email)) {
            showMessage('Παρακαλώ εισάγετε έγκυρο email.', 'error');
            emailInput.focus();
            return;
        }

        // Validate phone if provided
        const phone = phoneInput.value.trim();
        if (phone && !validatePhone(phone)) {
            showMessage('Παρακαλώ εισάγετε έγκυρο τηλέφωνο (10 ψηφία).', 'error');
            phoneInput.focus();
            return;
        }

        // Get form data
        const formData = {
            name: document.getElementById('name').value.trim(),
            phone: phone,
            email: email,
            product: document.getElementById('product').value,
            quantity: document.getElementById('quantity').value || '',
            comments: document.getElementById('comments').value.trim(),
            consent: document.getElementById('consent').checked
        };

        // Send to Formspree
        const formspreeEndpoint = 'https://formspree.io/f/xvgdnyoe';
        
        // Show loading state
        const submitButton = form.querySelector('.submit-button');
        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Αποστολή...';

        fetch(formspreeEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formData.name,
                phone: formData.phone || 'Δεν δόθηκε',
                email: formData.email || 'Δεν δόθηκε',
                product: formData.product || 'Δεν επιλέχθηκε',
                quantity: formData.quantity || 'Δεν καθορίστηκε',
                comments: formData.comments || 'Δεν υπάρχουν σχόλια',
                _subject: 'Νέα Παραγγελία - Ημερολόγιο Φαρμακοποιού',
                _replyto: formData.email || formData.phone
            })
        })
        .then(response => {
            if (response.ok) {
                showMessage('Η αίτησή σας υποβλήθηκε επιτυχώς! Θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.', 'success');
                form.reset();
            } else {
                throw new Error('Submission failed');
            }
        })
        .catch(error => {
            console.error('Form submission error:', error);
            showMessage('Υπήρξε ένα σφάλμα. Παρακαλώ δοκιμάστε ξανά ή επικοινωνήστε μαζί μας απευθείας στο 210 9410331.', 'error');
        })
        .finally(() => {
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        });
    });

    // Real-time validation feedback
    phoneInput.addEventListener('blur', function() {
        const phone = this.value.trim();
        if (phone && !validatePhone(phone)) {
            this.setCustomValidity('Παρακαλώ εισάγετε έγκυρο τηλέφωνο (10 ψηφία)');
        } else {
            this.setCustomValidity('');
        }
    });

    emailInput.addEventListener('blur', function() {
        const email = this.value.trim();
        if (email && !validateEmail(email)) {
            this.setCustomValidity('Παρακαλώ εισάγετε έγκυρο email');
        } else {
            this.setCustomValidity('');
        }
    });

    // Check contact info on blur
    function checkContactInfo() {
        if (!validateContactInfo()) {
            if (phoneInput.value.trim() || emailInput.value.trim()) {
                // User is typing, don't show error yet
                return;
            }
        }
    }

    phoneInput.addEventListener('blur', checkContactInfo);
    emailInput.addEventListener('blur', checkContactInfo);
});

