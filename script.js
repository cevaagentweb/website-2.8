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

    // Projects Typewriter
    const pTypewriterRole = document.getElementById('projects-typewriter-role');
    const pTypewriterText = document.getElementById('projects-typewriter-text');
    if (pTypewriterRole && pTypewriterText && window.projectsTypewriter) {
        let pIndex = 0;
        let pCharIndex = 0;
        let pIsDeleting = false;
        let pSpeed = 40;
        
        function projectsTypeEffect() {
            const currentLang = window.getCurrentLang ? window.getCurrentLang() : 'sk';
            const suggestions = window.projectsTypewriter[currentLang] || window.projectsTypewriter['sk'];
            const currentItem = suggestions[pIndex];
            
            const roleText = currentItem.role;
            const descText = currentItem.text;
            const totalLength = roleText.length + descText.length;

            if (pIsDeleting) {
                pCharIndex--;
                pSpeed = 30; // slower delete
            } else {
                pCharIndex++;
                pSpeed = 60; // slower type speed
            }

            // Render logic
            if (pCharIndex <= roleText.length) {
                pTypewriterRole.textContent = roleText.substring(0, pCharIndex);
                pTypewriterText.textContent = '';
            } else {
                pTypewriterRole.textContent = roleText;
                pTypewriterText.textContent = descText.substring(0, pCharIndex - roleText.length);
            }

            if (!pIsDeleting && pCharIndex === totalLength) {
                pIsDeleting = true;
                setTimeout(projectsTypeEffect, 8000); 
            } else if (pIsDeleting && pCharIndex === 0) {
                pIsDeleting = false;
                pIndex = (pIndex + 1) % suggestions.length;
                setTimeout(projectsTypeEffect, 500); 
            } else {
                setTimeout(projectsTypeEffect, pSpeed);
            }
        }
        
        setTimeout(projectsTypeEffect, 500);
        
        document.getElementById('lang-toggle')?.addEventListener('click', () => {
            setTimeout(() => {
                pIsDeleting = false;
                pCharIndex = 0;
                pIndex = 0;
            }, 100);
        });
    }

    // Contact Typewriter
    const cTypewriterText = document.getElementById('contact-typewriter-text');
    if (cTypewriterText && window.contactTypewriter) {
        let cIndex = 0;
        let cCharIndex = 0;
        let cIsDeleting = false;
        let cSpeed = 40;
        
        function contactTypeEffect() {
            const currentLang = window.getCurrentLang ? window.getCurrentLang() : 'sk';
            const suggestions = window.contactTypewriter[currentLang] || window.contactTypewriter['sk'];
            const fullText = suggestions[cIndex];
            
            if (cIsDeleting) {
                cTypewriterText.textContent = fullText.substring(0, cCharIndex - 1);
                cCharIndex--;
                cSpeed = 30; // fast delete
            } else {
                cTypewriterText.textContent = fullText.substring(0, cCharIndex + 1);
                cCharIndex++;
                cSpeed = 60; // normal type speed
            }

            if (!cIsDeleting && cCharIndex === fullText.length) {
                cIsDeleting = true;
                setTimeout(contactTypeEffect, 5000); 
            } else if (cIsDeleting && cCharIndex === 0) {
                cIsDeleting = false;
                cIndex = (cIndex + 1) % suggestions.length;
                setTimeout(contactTypeEffect, 500); 
            } else {
                setTimeout(contactTypeEffect, cSpeed);
            }
        }
        
        setTimeout(contactTypeEffect, 500);
        
        document.getElementById('lang-toggle')?.addEventListener('click', () => {
            setTimeout(() => {
                cIsDeleting = false;
                cCharIndex = 0;
                cIndex = 0;
            }, 100);
        });
    }


    // Hero Description Crossfade (17s fade)
    const heroDescAnim = document.getElementById('hero-desc');
    if (heroDescAnim) {
        let currentDesc = 1;
        setInterval(() => {
            // Fade out
            heroDescAnim.style.opacity = '0';
            
            setTimeout(() => {
                // Swap text reference
                currentDesc = currentDesc === 1 ? 2 : 1;
                heroDescAnim.setAttribute('data-i18n', 'hero.desc' + currentDesc);
                
                // Update text using lang.js logic if available
                if (typeof setLang === 'function') {
                    setLang(localStorage.getItem('lang') || 'sk');
                } else {
                    // Fallback if setLang isn't global
                    const lang = localStorage.getItem('lang') || 'sk';
                    if (window.translations && window.translations['hero.desc' + currentDesc]) {
                        heroDescAnim.textContent = window.translations['hero.desc' + currentDesc][lang];
                    }
                }
                
                // Fade in
                heroDescAnim.style.opacity = '1';
            }, 1000); // 1s matches the CSS transition duration
            
        }, 17000); // Swap every 17 seconds
    }

    // Hero Title Crossfade (11s fade)
    const heroTitleAnim = document.getElementById('hero-title');
    if (heroTitleAnim) {
        let currentTitle = 1;
        setInterval(() => {
            heroTitleAnim.style.opacity = '0';
            
            setTimeout(() => {
                currentTitle = currentTitle % 4 + 1; // 1 -> 2 -> 3 -> 4 -> 1
                heroTitleAnim.setAttribute('data-i18n', 'hero.title' + currentTitle);
                
                if (typeof setLang === 'function') {
                    setLang(localStorage.getItem('lang') || 'sk');
                } else {
                    const lang = localStorage.getItem('lang') || 'sk';
                    if (window.translations && window.translations['hero.title' + currentTitle]) {
                        heroTitleAnim.textContent = window.translations['hero.title' + currentTitle][lang];
                    }
                }
                
                heroTitleAnim.style.opacity = '1';
            }, 1000);
            
        }, 11000); // Swap every 11 seconds
    }

    // Contact Headline Crossfade (9s fade)
    const contactHeadlineAnim = document.getElementById('contact-headline');
    if (contactHeadlineAnim) {
        let currentContact = 1;
        setInterval(() => {
            contactHeadlineAnim.style.opacity = '0';
            
            setTimeout(() => {
                currentContact = currentContact % 3 + 1; // 1 -> 2 -> 3 -> 1
                contactHeadlineAnim.setAttribute('data-i18n', 'contact.flow.headline' + currentContact);
                
                if (typeof setLang === 'function') {
                    setLang(localStorage.getItem('lang') || 'sk');
                } else {
                    const lang = localStorage.getItem('lang') || 'sk';
                    if (window.translations && window.translations['contact.flow.headline' + currentContact]) {
                        contactHeadlineAnim.textContent = window.translations['contact.flow.headline' + currentContact][lang];
                    }
                }
                
                contactHeadlineAnim.style.opacity = '1';
            }, 1000);
            
        }, 9000); // Swap every 9 seconds
    }

    // --- Chat/Contact FAB (Floating Action Button) ---
    // Make sure we are not already at the contact form
    const isContactPage = window.location.pathname.includes('kontakt.html');
    if (!isContactPage) {
        const fab = document.createElement('a');
        fab.href = 'kontakt.html';
        fab.className = 'chat-fab';
        fab.innerHTML = `
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 5.582 2 10c0 2.535 1.488 4.796 3.791 6.222.062.909-.281 2.222-.843 3.255a.5.5 0 00.428.75c1.888-.026 3.655-.668 5.068-1.57A10.665 10.665 0 0012 18c5.523 0 10-3.582 10-8s-4.477-8-10-8zm-2.5 9.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/>
            </svg>
        `;
        document.body.appendChild(fab);

        // Show/hide based on scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                fab.classList.add('visible');
            } else {
                fab.classList.remove('visible');
            }
        });
    }

    // --- Cookie Consent Banner ---
    if (!localStorage.getItem('cookieConsent')) {
        const cookieBanner = document.createElement('div');
        cookieBanner.className = 'cookie-banner';
        
        cookieBanner.innerHTML = `
            <div>
                <h4 data-i18n="cookie.title">Rešpektujeme vaše súkromie</h4>
                <p data-i18n="cookie.desc">Tento web používa nevyhnutné súbory cookie pre správne fungovanie a analytické súbory cookie pre zlepšenie používateľského zážitku.</p>
            </div>
            <div class="cookie-buttons">
                <button class="cookie-btn reject" id="cookie-reject" data-i18n="cookie.reject">Iba nevyhnutné</button>
                <button class="cookie-btn accept" id="cookie-accept" data-i18n="cookie.accept">Prijať všetky</button>
            </div>
        `;
        document.body.appendChild(cookieBanner);
        
        // Wait a short moment to trigger the transition
        setTimeout(() => {
            cookieBanner.classList.add('visible');
            if (window.setLang) window.setLang(window.getCurrentLang ? window.getCurrentLang() : 'sk');
        }, 1000);

        document.getElementById('cookie-accept').addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'all');
            cookieBanner.classList.remove('visible');
            setTimeout(() => cookieBanner.remove(), 600);
        });

        document.getElementById('cookie-reject').addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'essential');
            cookieBanner.classList.remove('visible');
            setTimeout(() => cookieBanner.remove(), 600);
        });
    }

    // --- Mobile Menu ---
    const navRight = document.querySelector('.nav-right');
    const navPill = document.querySelector('.nav-pill');
    if (navRight && navPill) {
        // Create hamburger button
        const hamburger = document.createElement('button');
        hamburger.className = 'hamburger';
        hamburger.id = 'hamburger';
        hamburger.setAttribute('aria-label', 'Toggle menu');
        hamburger.innerHTML = '<span></span><span></span><span></span>';
        navRight.appendChild(hamburger);

        // Create mobile menu overlay
        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'mobile-menu';
        mobileMenu.id = 'mobile-menu';
        
        // Clone links from nav-pill
        const links = navPill.querySelectorAll('a');
        links.forEach(link => {
            const clone = link.cloneNode(true);
            mobileMenu.appendChild(clone);
        });

        // Clone CTA button if exists in nav-right
        const cta = navRight.querySelector('.nav-cta-btn');
        if (cta) {
            const ctaClone = cta.cloneNode(true);
            ctaClone.className = 'mobile-cta';
            mobileMenu.appendChild(ctaClone);
        }

        document.body.appendChild(mobileMenu);

        // Toggle logic
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            mobileMenu.classList.toggle('open');
            document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
        });

        // Close menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
        
        // Re-apply language if setLang exists
        if (window.setLang && window.getCurrentLang) {
            window.setLang(window.getCurrentLang());
        }
    }

}); // end DOMContentLoaded
