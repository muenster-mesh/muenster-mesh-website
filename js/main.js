// Mobile burger menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');

function closeMenu() {
    navToggle.classList.remove('open');
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
}

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        navToggle.classList.toggle('open', isOpen);
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });
}

// Highlight the nav link that points to the given section id
function setActive(id) {
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
}

// While a nav click scrolls the page, keep the clicked link highlighted.
// The last sections are too short to reach the top of the viewport, so the
// scroll-based detection would otherwise pick a different section.
let clickedId = null;
let clickTimeout = null;

function releaseClickLock() {
    clearTimeout(clickTimeout);
    clickTimeout = setTimeout(() => { clickedId = null; }, 150);
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const id = this.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        if (target) {
            clickedId = id;
            setActive(id);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            releaseClickLock();
        }
        closeMenu();
    });
});

// Active state for navigation on scroll
window.addEventListener('scroll', () => {
    if (clickedId) {
        releaseClickLock();
        return;
    }

    const sections = document.querySelectorAll('section');
    let current = '';

    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 100) {
            current = section.getAttribute('id');
        }
    });

    // At the bottom of the page, the last section is the one in view
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (atBottom && sections.length) {
        current = sections[sections.length - 1].getAttribute('id');
    }

    setActive(current);
});
