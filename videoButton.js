$('#scrollToTopBtn').on('click', function() {
    const target = window.innerHeight - 25;
    window.scrollTo({
        top: target,
        left: 0,
        behavior: 'smooth'
    });
});