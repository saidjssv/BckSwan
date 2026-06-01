const navbar = document.querySelector('.topbar');

if (navbar) {
    const handleScroll = () => {
        navbar.classList.toggle('is-scrolled', window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
}