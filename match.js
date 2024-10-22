const form = document.getElementById('volunteerForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const formData = new FormData(form);
    const locationInput = formData.get('location');
    console.log(locationInput);
  });
