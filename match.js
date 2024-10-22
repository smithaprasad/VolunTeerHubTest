const form = document.getElementById('volunteerForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const formData = new FormData(form);
    const location = formData.get('location');
    const experience = formData.get('experience');
    const categories = formData.getAll('categories'); 
    console.log(location);    
    console.log(experience);
    console.log(categories);

   

  });
