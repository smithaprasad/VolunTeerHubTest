const form = document.getElementById('volunteerForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const formData = new FormData(form);
    const location = formData.get('location');
    const experience = formData.get('experience');
    const categories = formData.getAll('categories'); 
    //console.log(location);    
    //console.log(experience);
    //console.log(categories);

     fetchVolunteerOpportunities(location, experience, categories)
            .then(result => {
                // Optionally show a success message
                //document.getElementById('content').innerHTML = `<p>Thank you for your submission!</p>`;
		resetForm();
		const resultArray = result.items;
		//console.log(result);
		//console.log(resultArray);
		const resultsTable = document.getElementById('resultsTable'); 
		resultsTable.style.display = 'table';
		int c=1;    
		for (let i = 0; i < resultArray.length; i++) {
    			console.log(resultArray[i].displayLink);
			var name = document.getElementById("name" + (c));
			name.innerHTML = resultArray[i].displayLink; 
			var website = document.getElementById("website" + (c));
			website.innerHTML = resultArray[i].displayLink;
			++c;
		}                
		    // Reset the form fields
            })
            .catch(error => {
                console.error('Error fetching volunteer opportunities:', error);
            });
	

  });

  // Fetch volunteer opportunities from the google
    async function fetchVolunteerOpportunities(location, experience, categories) {
	//const response = await fetch(`https://www.google.com/search?location=${encodeURIComponent(location)}&experience=${encodeURIComponent(experience)}&categories=${categories.map(c => encodeURIComponent(c)).join('&categories=')}`);
	//const opportunities = await response.json();
	    
	const apiKey = 'AIzaSyC182BoQ5Y8xmYCKDQjQ0D5QIMfbXdScqs';
	const searchEngineId = 'd180d7018dd9246dc';
	const query = `${location} ${experience}`;
	//console.log(query);
   	const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${encodeURIComponent(query)}`;
	//const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&location=${encodeURIComponent(location)}&experience=${encodeURIComponent(experience)}&categories=${categories.map(c => encodeURIComponent(c)).join('&categories=')}`);

	//console.log(url);
	const response = await fetch(url);
	const opportunities = await response.json();
	;
	return opportunities;    

    }
	
	function resetForm() {
	document.getElementById('volunteerForm').reset();   
	}
