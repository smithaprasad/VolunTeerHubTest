const form = document.getElementById('volunteerForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const formData = new FormData(form);
    const locationInput = formData.get('location');
    const experienceSelect = formData.get('experience');
    const categories = formData.getAll('categories'); 
    console.log(locationInput);    
    console.log(experienceSelect);
    console.log(categoriesInput);

    const location = locationInput.value;
    const experience = experienceSelect.value;
    const selectedCategories = Array.from(categories)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

    const response = await fetch(`/search?location=${encodeURIComponent(location)}&experience=${encodeURIComponent(experience)}&categories=${categories.map(c => encodeURIComponent(c)).join('&categories=')}`);
    const opportunities = await response.json();

    console.log('Fetched Opportunities:', opportunities);
    //displayOpportunities(opportunities);

  });
