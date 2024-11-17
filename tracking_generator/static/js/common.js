document.addEventListener('DOMContentLoaded', function() {
    // Dropdown functionality
    function initializeDropdowns() {
        const dropdowns = document.querySelectorAll('.dropdown');
        
        dropdowns.forEach(dropdown => {
            const dropbtn = dropdown.querySelector('.dropbtn');
            const dropdownContent = dropdown.querySelector('.dropdown-content');

            if (dropbtn && dropdownContent) {
                // Remove any existing event listeners first
                dropbtn.removeEventListener('click', dropdownHandler);
                
                // Add click event listener
                dropbtn.addEventListener('click', dropdownHandler);

                function dropdownHandler(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    dropdownContent.classList.toggle('show');
                    
                    // Close other dropdowns
                    dropdowns.forEach(otherDropdown => {
                        if (otherDropdown !== dropdown) {
                            otherDropdown.querySelector('.dropdown-content')?.classList.remove('show');
                        }
                    });
                }
            }
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.matches('.dropbtn')) {
                const dropdowns = document.querySelectorAll('.dropdown-content');
                dropdowns.forEach(dropdown => {
                    if (dropdown.classList.contains('show')) {
                        dropdown.classList.remove('show');
                    }
                });
            }
        });
    }

    // Initialize dropdowns
    initializeDropdowns();

    // Rest of your common functionality (modal, etc.)
    // ... existing code ...
}); 