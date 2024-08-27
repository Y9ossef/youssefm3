document.addEventListener('DOMContentLoaded', function () {
    // Example list of taken tables, you can fetch this dynamically from a server
    const takenTables = [4, 1];

    // Function to check table availability
    function checkTableAvailability(tableNumber) {
        if (takenTables.includes(tableNumber)) {
            alert('الطاوله محجوزه'); // Alert message indicating the table is reserved
            return false;
        } else {
            return true;
        }
    }

    // Add event listener to the table number dropdown
    document.getElementById('table-number').addEventListener('change', function() {
        const selectedTable = parseInt(this.value);
        checkTableAvailability(selectedTable);
    });

    // Add event listener to the form submission
    document.getElementById('booking-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            tableNumber: parseInt(document.getElementById('table-number').value),
            bookingDate: document.getElementById('booking-date').value,
            bookingTime: document.getElementById('booking-time').value
        };

        // Perform the availability check before submitting
        if (!checkTableAvailability(formData.tableNumber)) {
            return; // Stop form submission if the table is taken
        }

        // Display reservation details if the table is available
        const reservationDetails = `
            <strong>Name:</strong> ${formData.name} <br>
            <strong>Email:</strong> ${formData.email} <br>
            <strong>Table Number:</strong> ${formData.tableNumber} <br>
            <strong>Booking Date:</strong> ${formData.bookingDate} <br>
            <strong>Booking Time:</strong> ${formData.bookingTime}
        `;
        document.getElementById('reservation-details').innerHTML = reservationDetails;
        document.getElementById('reservation-details').style.color = 'black';

        // Hide all images first
        const images = document.querySelectorAll('#table-images img');
        images.forEach(img => img.style.display = 'none');

        // Show the image for the selected table
        const selectedImage = document.getElementById(`image-${formData.tableNumber}`);
        if (selectedImage) {
            selectedImage.style.display = 'block';
        }

        // Show the confirmation section
        document.getElementById('booking-section').style.display = 'none';
        document.getElementById('reservation-confirmation').style.display = 'block';
    });
});




