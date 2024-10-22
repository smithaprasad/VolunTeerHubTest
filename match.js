const form = document.getElementById('VolunteerForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const formData = new FormData(form);
    const nameInput = formData.get('name');
    console.log(nameInput);
  });
