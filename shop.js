// Shop page form handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const formMessage = document.getElementById('form-message');

    function validateContactInfo() {
        return phoneInput.value.trim() || emailInput.value.trim();
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validatePhone(phone) {
        return /^[0-9]{10}$/.test(phone.replace(/\s/g, ''));
    }

    function showMessage(message, type = 'success') {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        if (type === 'success') {
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        formMessage.style.display = 'none';

        if (!validateContactInfo()) {
            showMessage('Παρακαλώ συμπληρώστε τουλάχιστον ένα από τα δύο (τηλέφωνο ή email).', 'error');
            (phoneInput.value.trim() ? emailInput : phoneInput).focus();
            return;
        }

        const email = emailInput.value.trim();
        if (email && !validateEmail(email)) {
            showMessage('Παρακαλώ εισάγετε έγκυρο email.', 'error');
            emailInput.focus();
            return;
        }

        const phone = phoneInput.value.trim();
        if (phone && !validatePhone(phone)) {
            showMessage('Παρακαλώ εισάγετε έγκυρο τηλέφωνο (10 ψηφία).', 'error');
            phoneInput.focus();
            return;
        }

        const formData = {
            name: document.getElementById('name').value.trim(),
            phone: phone,
            email: email,
            product: document.getElementById('product').value,
            quantity: document.getElementById('quantity').value || '',
            comments: document.getElementById('comments').value.trim(),
            consent: document.getElementById('consent').checked
        };

        const formspreeEndpoint = 'https://formspree.io/f/xvgdnyoe';
        const submitButton = form.querySelector('.submit-button');
        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Αποστολή...';

        const requestBody = {
            name: formData.name,
            phone: formData.phone || 'Δεν δόθηκε',
            email: formData.email || 'Δεν δόθηκε',
            product: formData.product || 'Δεν επιλέχθηκε',
            quantity: formData.quantity || 'Δεν καθορίστηκε',
            comments: formData.comments || 'Δεν υπάρχουν σχόλια',
            _subject: 'Νέα Παραγγελία - Ημερολόγιο Φαρμακοποιού',
            _replyto: formData.email || formData.phone || ''
        };

        fetch(formspreeEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(requestBody)
        })
        .then(response => response.json().then(data => ({ ok: response.ok, data })))
        .then(({ ok }) => {
            if (ok) {
                showMessage('Η αίτησή σας υποβλήθηκε επιτυχώς! Θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.', 'success');
                form.reset();
            } else {
                showMessage('Υπήρξε ένα σφάλμα. Παρακαλώ δοκιμάστε ξανά ή καλέστε στο 210 9410331.', 'error');
            }
        })
        .catch(() => {
            showMessage('Υπήρξε ένα σφάλμα. Παρακαλώ δοκιμάστε ξανά ή καλέστε στο 210 9410331.', 'error');
        })
        .finally(() => {
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        });
    });

    phoneInput.addEventListener('blur', function() {
        const phone = this.value.trim();
        this.setCustomValidity(phone && !validatePhone(phone) ? 'Παρακαλώ εισάγετε έγκυρο τηλέφωνο (10 ψηφία)' : '');
    });

    emailInput.addEventListener('blur', function() {
        const email = this.value.trim();
        this.setCustomValidity(email && !validateEmail(email) ? 'Παρακαλώ εισάγετε έγκυρο email' : '');
    });
});
