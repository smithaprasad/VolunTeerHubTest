document.getElementById('volunteerForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
            console.log('Form submitted!');

            const locationInput = document.getElementById('location');
           

        console.log('Form submission captured');
        console.log('Location:', location);
});

 function resetForm() {
        locationInput.value = '';
        experienceSelect.selectedIndex = 0;
        categories.forEach(checkbox => checkbox.checked = false);
    }

    async function fetchVolunteerOpportunities(location, experience, categories) {
        alert('Fetching volunteer opportunities'); // Confirm fetch initiation
        console.log('Fetching volunteer opportunities');
        const response = await fetch(`/search?location=${encodeURIComponent(location)}&experience=${encodeURIComponent(experience)}&categories=${categories.map(c => encodeURIComponent(c)).join('&categories=')}`);
        const opportunities = await response.json();

        console.log('Fetched Opportunities:', opportunities);
        displayOpportunities(opportunities);
    }

function displayOpportunities(opportunities) {
        console.log('Displaying opportunities');
        const resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = '';

        if (opportunities.length === 0) {
            resultsContainer.innerHTML = '<p>No volunteer opportunities found based on your criteria.</p>';
            console.log('No volunteer opportunities found');
            return;
        }

        opportunities.forEach(opportunity => {
            const opportunityElement = document.createElement('div');
            opportunityElement.classList.add('opportunity');
            opportunityElement.innerHTML = `
                <h3>Location: ${opportunity.location}</h3>
                <p>Experience: ${opportunity.experience}</p>
                <p>Categories: ${opportunity.categories.join(', ')}</p>
            `;

            resultsContainer.appendChild(opportunityElement);
        });

        console.log('Results Container:', resultsContainer.innerHTML);
    }
});
