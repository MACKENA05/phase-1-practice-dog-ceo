// // console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    window.addEventListener('load' , ()=> {
     fetch(imgUrl)
     .then(response => response.json())
     .then(data =>{
        const images = data.message

        const container = document.getElementById('dog-image-container')

        images.forEach(url => {
            const img = document.createElement('img');
            img.src = url
            img.alt =  "Random Dog"
            img.style.margin = '10px'
            img.style.maxWidth = '300px'

            container.appendChild(img)
        })
     })
     .catch(error =>{
         console.log('Error fetching dog images:', error)
    })

})

const breedUrl = "https://dog.ceo/api/breeds/list/all";

window.addEventListener('load', () => {
  // Fetch all dog breeds
  fetch(breedUrl)
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
      const breeds = data.message; // All breeds from the API response
      const ulElement = document.getElementById('dog-breeds'); // <ul> element to append <li>s
      const letterDropdown = document.getElementById('breed-dropdown'); // <select> element

      // Function to display breeds based on the selected letter
      function displayBreeds(letter) {
        ulElement.innerHTML = ''; // Clear the list before adding new breeds

        for (const breed in breeds) {
          if (breeds.hasOwnProperty(breed)) {
            // Check if breed starts with the selected letter
            if (breed.toLowerCase().startsWith(letter.toLowerCase())) {
              const li = document.createElement('li');  // Create a new <li> element
              li.textContent = breed;  // Set the breed name as the text of the <li>
              ulElement.appendChild(li);  // Append the <li> to the <ul>
              li.addEventListener('click', () => {
                // Change the font color of the clicked <li>
                li.style.color = 'blue';  // You can choose any color (e.g., 'blue', 'red', etc.)
              });
            }
          }
        }
      }

      // Event listener for dropdown change
      letterDropdown.addEventListener('change', (event) => {
        const selectedLetter = event.target.value; // Get the selected letter
        displayBreeds(selectedLetter); // Display breeds starting with the selected letter
      });

      // Initially display all breeds (if needed)
      displayBreeds(''); // Show all breeds on page load
    })
    .catch(error => {
      console.error('Error fetching dog breeds:', error); // Log any errors
    });
});
