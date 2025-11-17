// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            const navLinks = document.getElementById('nav-links');
            const hamburger = document.getElementById('hamburger');
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });
});

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        } else {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
}

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe archive items
document.querySelectorAll('.archive-item, .archive-item-full').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Observe about cards
document.querySelectorAll('.about-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// System theme detection and dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Function to detect system preference
function getSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
}

// Function to apply theme
function applyTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}

// Function to update theme icon
function updateThemeIcon(theme) {
    const themeIcon = themeToggle?.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Initialize theme: check for saved preference first, then system preference
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        // User has manually set a preference
        applyTheme(savedTheme);
        updateThemeIcon(savedTheme);
    } else {
        // Use system preference
        const systemTheme = getSystemTheme();
        applyTheme(systemTheme);
        updateThemeIcon(systemTheme);
    }
}

// Listen for system theme changes
if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
        // Only apply system theme if user hasn't manually set a preference
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            applyTheme(newTheme);
            updateThemeIcon(newTheme);
        }
    });
}

// Initialize theme on page load
initTheme();

// Theme toggle button (manual override)
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-mode');
        const newTheme = isDark ? 'light' : 'dark';
        
        applyTheme(newTheme);
        updateThemeIcon(newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Close menu when clicking on a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Set active nav link based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinksAll = document.querySelectorAll('.nav-links a');

navLinksAll.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
    }
});

// Copy to clipboard functionality
function copyToClipboard(text, element) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            // Show feedback
            const originalText = element.textContent;
            const originalColor = element.style.color;
            element.textContent = 'Αντιγράφηκε!';
            element.style.color = 'var(--pharmacy-green, #2d8659)';
            
            setTimeout(() => {
                element.textContent = originalText;
                element.style.color = originalColor;
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy:', err);
            // Fallback for older browsers
            fallbackCopyToClipboard(text, element);
        });
    } else {
        fallbackCopyToClipboard(text, element);
    }
}

// Fallback copy method for older browsers
function fallbackCopyToClipboard(text, element) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        const originalText = element.textContent;
        element.textContent = 'Αντιγράφηκε!';
        element.style.color = 'var(--pharmacy-green, #2d8659)';
        
        setTimeout(() => {
            element.textContent = originalText;
            element.style.color = '';
        }, 2000);
    } catch (err) {
        console.error('Fallback copy failed:', err);
    }
    
    document.body.removeChild(textArea);
}

// Make phone numbers and emails clickable to copy
document.addEventListener('DOMContentLoaded', function() {
    // Find all phone numbers (various formats)
    const phoneSelectors = [
        '.phone', 
        '.phone-number', 
        '.order-contact-value', 
        '.footer-contact',
        '.copyable-phone'
    ];
    
    phoneSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            const text = element.textContent || element.innerText;
            // Match Greek phone numbers (210 followed by 7 digits, with or without spaces)
            const phoneMatch = text.match(/210\s?\d{7}/);
            if (phoneMatch) {
                const phone = phoneMatch[0].replace(/\s/g, '');
                element.style.cursor = 'pointer';
                element.style.textDecoration = 'underline';
                element.style.textDecorationStyle = 'dotted';
                element.title = 'Κάντε κλικ για αντιγραφή: ' + phone;
                element.addEventListener('click', (e) => {
                    e.preventDefault();
                    copyToClipboard(phone, element);
                });
            }
        });
    });
    
    // Find all emails
    const emailSelectors = [
        '.order-contact-value', 
        '.footer-contact',
        '.copyable-email'
    ];
    
    emailSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            const text = element.textContent || element.innerText;
            // Match email addresses
            const emailMatch = text.match(/[\w\.-]+@[\w\.-]+\.\w+/);
            if (emailMatch) {
                const email = emailMatch[0];
                element.style.cursor = 'pointer';
                element.style.textDecoration = 'underline';
                element.style.textDecorationStyle = 'dotted';
                element.title = 'Κάντε κλικ για αντιγραφή: ' + email;
                element.addEventListener('click', (e) => {
                    e.preventDefault();
                    copyToClipboard(email, element);
                });
            }
        });
    });
});
