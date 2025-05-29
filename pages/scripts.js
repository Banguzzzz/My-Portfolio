
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const headerHeight = document.querySelector('.header').offsetHeight;
    const additionalOffset = 70;

    window.scrollTo({
        top: section.offsetTop - headerHeight - additionalOffset,
        behavior: 'smooth'
    });
}