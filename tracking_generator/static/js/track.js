document.addEventListener('DOMContentLoaded', function() {
    // Dropdown functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        dropbtn.addEventListener('click', function(e) {
            e.preventDefault();
            dropdownContent.classList.toggle('show');
        });

        // Close the dropdown if the user clicks outside of it
        window.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                dropdownContent.classList.remove('show');
            }
        });
    });

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

    // You can add more JavaScript functionality for track.html here
});
