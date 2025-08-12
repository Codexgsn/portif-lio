// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // Elementos do DOM
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');
    const contactForm = document.querySelector('.contact-form');
    
    // Elementos do cursor personalizado
    const customCursor = document.getElementById('customCursor');
    const cursorFollower = document.getElementById('cursorFollower');
    
    // Detecta se é dispositivo móvel
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
    
    // Inicializa cursor personalizado apenas em desktop
    if (!isMobile) {
        initCustomCursor();
    }
    
    // Inicializa background animado
    initAnimatedBackground();
    
    // Menu Mobile Toggle
    function toggleMobileMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    }
    
    // Fecha o menu mobile quando clica em um link
    function closeMobileMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
    
    // Event Listeners
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Navbar transparente/opaca baseada no scroll
    function handleNavbarScroll() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(15, 15, 35, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(15, 15, 35, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
    
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Smooth Scroll para links internos
    function initSmoothScroll() {
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        const navbarHeight = navbar.offsetHeight;
                        const targetPosition = targetElement.offsetTop - navbarHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }
    
    initSmoothScroll();
    
    // Animação de elementos ao aparecer na tela
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Elementos para animar
        const elementsToAnimate = document.querySelectorAll(
            '.skill-card, .project-card, .stat, .about-text, .contact-info, .contact-form'
        );
        
        elementsToAnimate.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    }
    
    initScrollAnimations();
    
    // Animação das estatísticas (contagem crescente)
    function animateStats() {
        const stats = document.querySelectorAll('.stat h3');
        
        stats.forEach(stat => {
            const finalValue = parseInt(stat.textContent);
            const increment = finalValue / 100;
            let currentValue = 0;
            
            const counter = setInterval(() => {
                currentValue += increment;
                if (currentValue >= finalValue) {
                    stat.textContent = finalValue + '+';
                    clearInterval(counter);
                } else {
                    stat.textContent = Math.floor(currentValue) + '+';
                }
            }, 20);
        });
    }
    
    // Observer para as estatísticas
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const aboutStats = document.querySelector('.about-stats');
    if (aboutStats) {
        statsObserver.observe(aboutStats);
    }
    
    // Formulário de contato
    function initContactForm() {
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Pega os valores do formulário
                const formData = new FormData(this);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');
                
                // Validação básica
                if (!name || !email || !message) {
                    showNotification('Por favor, preencha todos os campos.', 'error');
                    return;
                }
                
                if (!isValidEmail(email)) {
                    showNotification('Por favor, insira um email válido.', 'error');
                    return;
                }
                
                // Simula envio do formulário
                const submitButton = this.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;
                
                submitButton.textContent = 'Enviando...';
                submitButton.disabled = true;
                
                // Simula delay de envio
                setTimeout(() => {
                    showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
                    this.reset();
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                }, 2000);
            });
        }
    }
    
    initContactForm();
    
    // Função para validar email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Sistema de notificações
    function showNotification(message, type = 'info') {
        // Remove notificação existente
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Cria nova notificação
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Adiciona estilos
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            background: ${type === 'success' ? '#00d4aa' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            transform: translateX(400px);
            transition: transform 0.3s ease;
            max-width: 350px;
            font-family: var(--font-primary);
        `;
        
        notification.querySelector('.notification-content').style.cssText = `
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        `;
        
        notification.querySelector('.notification-close').style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        document.body.appendChild(notification);
        
        // Anima entrada
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove automaticamente após 5 segundos
        const autoRemove = setTimeout(() => {
            removeNotification(notification);
        }, 5000);
        
        // Remove ao clicar no X
        notification.querySelector('.notification-close').addEventListener('click', () => {
            clearTimeout(autoRemove);
            removeNotification(notification);
        });
    }
    
    function removeNotification(notification) {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }
    
    // Efeito parallax sutil no hero
    function initParallaxEffect() {
        const hero = document.querySelector('.hero');
        const codeAnimation = document.querySelector('.code-animation');
        
        if (hero && codeAnimation) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                
                if (scrolled < window.innerHeight) {
                    codeAnimation.style.transform = `translateY(${rate}px)`;
                }
            });
        }
    }
    
    initParallaxEffect();
    
    // Adiciona classe active ao link da seção atual
    function initActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        
        function updateActiveNav() {
            const scrollPosition = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    // Remove active de todos os links
                    navLinks.forEach(link => link.classList.remove('active'));
                    // Adiciona active ao link atual
                    if (navLink) {
                        navLink.classList.add('active');
                    }
                }
            });
        }
        
        window.addEventListener('scroll', updateActiveNav);
        updateActiveNav(); // Executa uma vez ao carregar
    }
    
    initActiveNavigation();
    
    // Adiciona estilos para o link ativo
    const activeNavStyle = document.createElement('style');
    activeNavStyle.textContent = `
        .nav-link.active {
            color: var(--primary-color) !important;
        }
        .nav-link.active::after {
            width: 100% !important;
        }
    `;
    document.head.appendChild(activeNavStyle);
    
    // Adiciona efeito de digitação no título
    function typeWriter() {
        const textElement = document.querySelector('.hero-title .highlight');
        if (!textElement) return;
        
        const originalText = textElement.textContent;
        const words = ['Programador', 'Desenvolvedor', 'Designer', 'Criativo'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                textElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                textElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }
            
            let typeSpeed = isDeleting ? 100 : 150;
            
            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 2000; // Pausa antes de começar a deletar
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500; // Pausa antes de digitar nova palavra
            }
            
            setTimeout(type, typeSpeed);
        }
        
        // Inicia o efeito após 1 segundo
        setTimeout(type, 1000);
    }
    
    typeWriter();
    
    // Cursor Personalizado
    function initCustomCursor() {
        if (!customCursor || !cursorFollower) return;
        
        let mouseX = 0;
        let mouseY = 0;
        let followerX = 0;
        let followerY = 0;
        
        // Esconde o cursor padrão
        document.body.style.cursor = 'none';
        
        // Movimento do cursor
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            customCursor.style.left = mouseX + 'px';
            customCursor.style.top = mouseY + 'px';
        });
        
        // Animação suave do cursor follower
        function animateFollower() {
            const distX = mouseX - followerX;
            const distY = mouseY - followerY;
            
            followerX += distX * 0.1;
            followerY += distY * 0.1;
            
            cursorFollower.style.left = followerX + 'px';
            cursorFollower.style.top = followerY + 'px';
            
            requestAnimationFrame(animateFollower);
        }
        animateFollower();
        
        // Efeitos hover em elementos interativos
        const interactiveElements = document.querySelectorAll('a, button, .btn, .project-card, .skill-card');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                customCursor.classList.add('cursor-hover');
                cursorFollower.classList.add('cursor-hover');
            });
            
            element.addEventListener('mouseleave', () => {
                customCursor.classList.remove('cursor-hover');
                cursorFollower.classList.remove('cursor-hover');
            });
        });
        
        // Efeito especial em botões
        const buttons = document.querySelectorAll('.btn, button');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                customCursor.classList.add('cursor-button');
                cursorFollower.classList.add('cursor-button');
            });
            
            button.addEventListener('mouseleave', () => {
                customCursor.classList.remove('cursor-button');
                cursorFollower.classList.remove('cursor-button');
            });
        });
        
        // Ripple effect no clique
        document.addEventListener('click', (e) => {
            createRipple(e.clientX, e.clientY);
        });
    }
    
    // Criar efeito ripple
    function createRipple(x, y) {
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        document.body.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    // Background Animado
    function initAnimatedBackground() {
        createCodeParticles();
        
        // Recreia partículas periodicamente
        setInterval(createCodeParticles, 5000);
    }
    
    // Criar partículas de código
    function createCodeParticles() {
        const container = document.getElementById('codeParticles');
        if (!container) return;
        
        const codeSnippets = [
            'function()', 'const x =', 'return', 'if(true)', 'async', 'await',
            '=> {}', 'import', 'export', 'class', 'new', 'this.',
            '{ }', '[ ]', '( )', '!==', '===', '&&', '||', 'null',
            'undefined', 'console.log', 'document', 'window', 'event',
            'style.', 'getElementById', 'querySelector', 'addEventListener',
            'setTimeout', 'setInterval', 'Promise', 'then()', 'catch()',
            'try', 'catch', 'finally', 'throw', 'error', 'debug',
            'API', 'HTTP', 'JSON', 'fetch()', 'response', 'data',
            '.map()', '.filter()', '.reduce()', '.forEach()', 'push()',
            'innerHTML', 'textContent', 'createElement', 'appendChild'
        ];
        
        // Limpa partículas antigas
        container.innerHTML = '';
        
        // Cria novas partículas
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                particle.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
                
                // Posição inicial aleatória
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 5 + 's';
                particle.style.animationDuration = (20 + Math.random() * 10) + 's';
                
                container.appendChild(particle);
                
                // Remove após a animação
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, 30000);
            }, i * 300);
        }
    }
    
    // Mouse trail effect
    function initMouseTrail() {
        const trail = [];
        const trailLength = 10;
        
        document.addEventListener('mousemove', (e) => {
            trail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
            
            if (trail.length > trailLength) {
                trail.shift();
            }
            
            // Remove pontos antigos
            trail.forEach((point, index) => {
                if (Date.now() - point.time > 500) {
                    trail.splice(index, 1);
                }
            });
        });
    }
    
    initMouseTrail();
    
    // Parallax effect nos shapes do background
    function initBackgroundParallax() {
        const shapes = document.querySelectorAll('.shape');
        
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.5;
                const xOffset = (x - 0.5) * speed * 50;
                const yOffset = (y - 0.5) * speed * 50;
                
                shape.style.transform = `translateX(${xOffset}px) translateY(${yOffset}px)`;
            });
        });
    }
    
    initBackgroundParallax();
    
    // Console Easter Egg
    console.log(`
    %c🚀 Olá, desenvolvedor curioso!
    %cEste portfólio foi criado com amor e atenção aos detalhes.
    %cTecnologias usadas: HTML5, CSS3, JavaScript vanilla
    %cSe você chegou até aqui, que tal entrarmos em contato? 😉
    `, 
    'color: #00d4aa; font-size: 20px; font-weight: bold;',
    'color: #a0a0a0; font-size: 14px;',
    'color: #00d4aa; font-size: 14px;',
    'color: #a0a0a0; font-size: 14px;'
    );
});

// Função para lazy loading de imagens (caso adicione imagens depois)
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Detecta se o usuário prefere movimento reduzido
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Desabilita animações para usuários que preferem movimento reduzido
    document.documentElement.style.setProperty('--transition-fast', '0s');
    document.documentElement.style.setProperty('--transition-medium', '0s');
    document.documentElement.style.setProperty('--transition-slow', '0s');
}

// Service Worker para PWA (opcional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registrado com sucesso:', registration);
            })
            .catch(registrationError => {
                console.log('Falha ao registrar SW:', registrationError);
            });
    });
} 