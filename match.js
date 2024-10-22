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

   const apiKey = 'AIzaSyC182BoQ5Y8xmYCKDQjQ0D5QIMfbXdScqs';
	const searchEngineId = 'd180d7018dd9246dc';
	//const query = 'John Doe';
	const query = `${location} ${experience}`;

	  console.log(query);
   	const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${encodeURIComponent(query)}`;

	  console.log(url);
	

  });
