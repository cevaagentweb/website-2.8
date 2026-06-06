document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll-reveal animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Smooth scroll to hash on page load (for cross-page section links)
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        }
    }

    // Testimonial Slider
    const dots = document.querySelectorAll('.testimonial-dots .dot');
    const slides = document.querySelectorAll('.testimonial-slide');

    if (dots.length && slides.length) {
        let currentSlide = 0;
        let autoplayInterval;

        function goToSlide(index) {
            slides.forEach(s => s.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            currentSlide = index;
        }

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                goToSlide(parseInt(dot.dataset.index));
                clearInterval(autoplayInterval);
                startAutoplay();
            });
        });

        function startAutoplay() {
            autoplayInterval = setInterval(() => {
                goToSlide((currentSlide + 1) % slides.length);
            }, 5000);
        }

        startAutoplay();
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            // Close all
            faqItems.forEach(i => i.classList.remove('open'));
            // Toggle current
            if (!isOpen) {
                item.classList.add('open');
            }
        });
    });

    // Image Modal
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalClose = document.getElementById('modal-close');
    const modalOverlay = modal ? modal.querySelector('.modal-overlay') : null;

    document.querySelectorAll('.pdf-btn[data-image]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const imageSrc = btn.dataset.image;
            if (modal && modalImage) {
                modalImage.src = imageSrc;
                modal.classList.add('open');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    function closeModal() {
        if (modal) {
            modal.classList.remove('open');
            document.body.style.overflow = '';
        }
    }

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
});

    // Rotating Placeholder for Contact Form
    const messageTextarea = document.getElementById('message');
    if (messageTextarea && window.promptSuggestions) {
        let suggestionIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let currentSuggestion = '';
        let typingSpeed = 50;
        
        function typeEffect() {
            const currentLang = window.getCurrentLang ? window.getCurrentLang() : 'sk';
            const suggestions = window.promptSuggestions[currentLang] || window.promptSuggestions['sk'];
            const fullText = suggestions[suggestionIndex];

            if (isDeleting) {
                currentSuggestion = fullText.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 30; // Faster when deleting
            } else {
                currentSuggestion = fullText.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 50; // Normal typing speed
            }

            messageTextarea.placeholder = currentSuggestion;

            if (!isDeleting && charIndex === fullText.length) {
                // Wait 6 seconds before deleting
                isDeleting = true;
                setTimeout(typeEffect, 6000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                suggestionIndex = (suggestionIndex + 1) % suggestions.length;
                setTimeout(typeEffect, 500); // Wait before typing next
            } else {
                setTimeout(typeEffect, typingSpeed);
            }
        }
        
        // Start after a short delay
        setTimeout(typeEffect, 1000);
        
        // Listen for language change to restart typing effect correctly
        document.getElementById('lang-toggle')?.addEventListener('click', () => {
            setTimeout(() => {
                isDeleting = false;
                charIndex = 0;
                suggestionIndex = 0;
            }, 100);
        });
    }

    // Hero Typewriter
    const heroTypewriter = document.getElementById('hero-typewriter');
    if (heroTypewriter && window.heroSuggestions) {
        let hIndex = 0;
        let hCharIndex = 0;
        let hIsDeleting = false;
        let hSpeed = 60;
        
        function heroTypeEffect() {
            const currentLang = window.getCurrentLang ? window.getCurrentLang() : 'sk';
            const suggestions = window.heroSuggestions[currentLang] || window.heroSuggestions['sk'];
            const fullText = suggestions[hIndex];

            if (hIsDeleting) {
                heroTypewriter.textContent = fullText.substring(0, hCharIndex - 1);
                hCharIndex--;
                hSpeed = 30; 
            } else {
                heroTypewriter.textContent = fullText.substring(0, hCharIndex + 1);
                hCharIndex++;
                hSpeed = 60; 
            }

            if (!hIsDeleting && hCharIndex === fullText.length) {
                hIsDeleting = true;
                setTimeout(heroTypeEffect, 4000); // wait 4s
            } else if (hIsDeleting && hCharIndex === 0) {
                hIsDeleting = false;
                hIndex = (hIndex + 1) % suggestions.length;
                setTimeout(heroTypeEffect, 500); 
            } else {
                setTimeout(heroTypeEffect, hSpeed);
            }
        }
        
        setTimeout(heroTypeEffect, 500);
        
        document.getElementById('lang-toggle')?.addEventListener('click', () => {
            setTimeout(() => {
                hIsDeleting = false;
                hCharIndex = 0;
                hIndex = 0;
            }, 100);
        });
    }
