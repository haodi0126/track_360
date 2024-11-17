document.addEventListener('DOMContentLoaded', function() {
    const hero = document.getElementById('hero');
    const backgrounds = [
        'img/home page/1.jpeg',
        'img/home page/2.jpeg',
        'img/home page/3.jpg'
    ];
    let currentBackground = 0;

    function changeBackground() {
        hero.style.backgroundImage = `url('${backgrounds[currentBackground]}')`;
        currentBackground = (currentBackground + 1) % backgrounds.length;
    }

    // Change background every 5 seconds
    setInterval(changeBackground, 5000);

    // Set initial background
    changeBackground();

    // Sign-in modal functionality
    const signInBtn = document.getElementById('signInBtn');
    const signInModal = document.getElementById('signInModal');
    const closeBtn = signInModal.querySelector('.close');
    const signInForm = document.getElementById('signInForm');

    signInBtn.addEventListener('click', function() {
        signInModal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        signInModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == signInModal) {
            signInModal.style.display = 'none';
        }
    });

    signInForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            alert(`Sign in successful! Welcome, ${username}`);
            signInModal.style.display = 'none';
        } else {
            alert("Please fill in all fields.");
        }
    });

    // Dropdown functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        // Toggle dropdown on click
        dropbtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation(); // Prevent event from bubbling up
            dropdownContent.classList.toggle('show');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                dropdownContent.classList.remove('show');
            }
        });
    });

    // Add smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Sign In Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('signInModal');
    const signInBtn = document.getElementById('signInBtn');
    const closeBtn = document.querySelector('.close');

    if (signInBtn) {
        signInBtn.onclick = function() {
            modal.style.display = "block";
        }
    }

    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
