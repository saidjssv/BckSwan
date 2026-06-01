const initNavbarScroll = () => {
    const navbar = document.querySelector('.topbar');

    if (!navbar) {
        return;
    }

    const handleScroll = () => {
        const currentScroll = window.scrollY || document.documentElement.scrollTop;
        navbar.classList.toggle('is-scrolled', currentScroll > 8);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbarScroll, { once: true });
} else {
    initNavbarScroll();
}