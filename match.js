const form = document.getElementById('volunteerForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const formData = new FormData(form);
    const locationInput = formData.get('location');
    const experienceSelect = formData.get('experience');
    const categories = formData.getAll('categories'); 
    console.log(locationInput);    
    console.log(experienceSelect);
    console.log(categories);

    const location = locationInput.value;
    const experience = experienceSelect.value;
    const selectedCategories = Array.from(categories)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

    console.log(location);    
    console.log(experience);
    console.log(selectedCategories);


  });
