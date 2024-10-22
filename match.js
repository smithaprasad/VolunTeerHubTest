document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('volunteerForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Collect the form data
        const location = document.getElementById('location').value;
        console.log(location);
        const experience = document.getElementById('experience').value;
        const interests = [];
        
        // Check which categories are selected
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        checkboxes.forEach(checkbox => {
            interests.push(checkbox.value);
        });

        // Display the collected data (you can modify this to do whatever you need)
        const results = document.getElementById('results');
        results.innerHTML = `
            <h3>Your Submitted Information:</h3>
            <p>Location: ${location}</p>
            <p>Experience Level: ${experience}</p>
            <p>Interests: ${interests.join(', ') || 'None selected'}</p>
        `;
    });
});
