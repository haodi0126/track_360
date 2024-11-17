document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const trackingNumber = urlParams.get('tracking-number');

    const trackingNumberElement = document.getElementById('tracking-number');
    const statusElement = document.getElementById('status');
    const estimatedDeliveryElement = document.getElementById('estimated-delivery');
    const currentLocationElement = document.getElementById('current-location');

    if (trackingNumber) {
        // Simulate tracking result (replace this with actual API call)
        const isValidTracking = Math.random() < 0.8; // 80% chance of success

        if (isValidTracking) {
            trackingNumberElement.textContent = trackingNumber;
            statusElement.textContent = 'In Transit';
            statusElement.classList.add('success');
            estimatedDeliveryElement.textContent = 'March 15, 2024';
            currentLocationElement.textContent = 'Distribution Center, New York';
        } else {
            trackingNumberElement.textContent = trackingNumber;
            statusElement.textContent = 'Not Found';
            statusElement.classList.add('error');
            estimatedDeliveryElement.textContent = 'N/A';
            currentLocationElement.textContent = 'N/A';
        }
    } else {
        trackingNumberElement.textContent = 'N/A';
        statusElement.textContent = 'No tracking number provided';
        statusElement.classList.add('error');
        estimatedDeliveryElement.textContent = 'N/A';
        currentLocationElement.textContent = 'N/A';
    }
});

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

