const form = document.getElementById('volunteerForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const formData = new FormData(form);
    const locationInput = formData.get('location');
    const experienceInput = formData.get('experience');
    const categoriesInput = formData.getAll('categories'); // Get all values of 'fruits'
    console.log(locationInput);    
    console.log(experienceInput);
    console.log(categoriesInput);

  });
