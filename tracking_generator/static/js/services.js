document.addEventListener('DOMContentLoaded', function() {
    // Get the button and heading elements
    const button = document.querySelector('.services-text .btn');
    const heading = document.querySelector('.services-text h1');

    // Add animation classes
    button.classList.add('animate-fade');
    heading.classList.add('animate-fade');

    // Animate button first
    setTimeout(() => {
        button.classList.add('show');
    }, 500);

    // Animate heading second
    setTimeout(() => {
        heading.classList.add('show');
    }, 1000);
}); 