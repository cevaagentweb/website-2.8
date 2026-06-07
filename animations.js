document.addEventListener('DOMContentLoaded', () => {
    // 1. Custom Cursor
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const hoverElements = document.querySelectorAll('a, button, .project-card, .nav-pill, .stat-box, .pdf-btn, .about-card, .audience-card, .faq-question');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    // 2. 3D Tilt Effect for project cards
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -8;
            const rotateY = ((x - centerX) / centerX) * 8;

            card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale3d(1.02, 1.02, 1.02)';
            card.style.zIndex = 10;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            card.style.transition = 'transform 0.5s ease';
            setTimeout(() => { card.style.zIndex = ''; }, 500);
        });

        card.addEventListener('mouseenter', () => {
            card.style.transition = 'none';
        });
    });

    // 3. Parallax Backgrounds
    window.addEventListener('scroll', () => {
        const bgs = document.querySelectorAll('.project-bg');
        bgs.forEach(bg => {
            const rect = bg.parentElement.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const speed = 0.15;
                const offset = (rect.top - window.innerHeight / 2) * speed;
                bg.style.transform = 'translateY(' + offset + 'px) scale(1.15)';
            }
        });
    });

    // 4. Light/Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', (e) => {
            e.preventDefault();
            document.body.classList.toggle('light-mode');
            const isLight = document.body.classList.contains('light-mode');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            themeToggle.textContent = isLight ? '\uD83C\uDF19' : '\u2600\uFE0F';
        });

        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-mode');
            themeToggle.textContent = '\uD83C\uDF19';
        }
    }
});

// Interactive Glitter Starry Orb Effect for Project Cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        let canvas = document.createElement('canvas');
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '2'; // Above background, below text
        canvas.style.opacity = '0';
        canvas.style.transition = 'opacity 0.4s ease';
        canvas.style.mixBlendMode = 'screen';
        card.appendChild(canvas);
        
        let ctx = canvas.getContext('2d');
        let particles = [];
        let animationFrame;
        let isHovering = false;
        let mouseX = 0;
        let mouseY = 0;
        
        function resizeCanvas() {
            canvas.width = card.offsetWidth;
            canvas.height = card.offsetHeight;
        }
        
        // Setup canvas
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                // Randomly spread around mouse
                this.baseX = x + (Math.random() - 0.5) * 80;
                this.baseY = y + (Math.random() - 0.5) * 80;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 2;
                this.speedY = (Math.random() - 0.5) * 2;
                this.life = 1;
                this.decay = Math.random() * 0.02 + 0.02;
                // Glitter colors: cyan, purple, blue, white
                const colors = ['#00f2fe', '#4facfe', '#c084fc', '#ffffff'];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }
            
            update() {
                // Pull towards mouse slightly
                let dx = mouseX - this.x;
                let dy = mouseY - this.y;
                let distance = Math.sqrt(dx*dx + dy*dy);
                
                if (distance > 10) {
                    this.x += dx * 0.05 + this.speedX;
                    this.y += dy * 0.05 + this.speedY;
                } else {
                    this.x += this.speedX;
                    this.y += this.speedY;
                }
                
                this.life -= this.decay;
            }
            
            draw() {
                ctx.globalAlpha = Math.max(0, this.life);
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                
                // Glow
                ctx.shadowBlur = 10;
                ctx.shadowColor = this.color;
            }
        }
        
        function animate() {
            if (!isHovering && particles.length === 0) return;
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Spawn new particles if hovering
            if (isHovering) {
                for (let i = 0; i < 5; i++) {
                    particles.push(new Particle(mouseX, mouseY));
                }
            }
            
            // Update and draw
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
                
                if (particles[i].life <= 0) {
                    particles.splice(i, 1);
                    i--;
                }
            }
            
            animationFrame = requestAnimationFrame(animate);
        }
        
        card.addEventListener('mouseenter', (e) => {
            isHovering = true;
            canvas.style.opacity = '1';
            
            const rect = card.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
            
            animate();
        });
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        });
        
        card.addEventListener('mouseleave', () => {
            isHovering = false;
            canvas.style.opacity = '0';
            // Animation loop will stop itself when particles die
        });
    });
});
