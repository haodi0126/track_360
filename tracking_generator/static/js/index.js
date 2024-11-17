document.addEventListener('DOMContentLoaded', function() {
    // Get the elements
    const buttons = document.querySelector('.cta-buttons');
    const heading = document.querySelector('#hero h1');
    const paragraph = document.querySelector('#hero p');

    // Add animation classes
    buttons.classList.add('animate-fade');
    heading.classList.add('animate-fade');
    paragraph.classList.add('animate-fade');

    // Animate buttons first
    setTimeout(() => {
        buttons.classList.add('show');
    }, 500);

    // Animate heading second
    setTimeout(() => {
        heading.classList.add('show');
    }, 1000);

    // Animate paragraph last
    setTimeout(() => {
        paragraph.classList.add('show');
    }, 1500);
}); 