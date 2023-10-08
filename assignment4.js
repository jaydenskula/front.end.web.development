fetch('https://www.boredapi.com/api/activity')
.then((response) => { return response.json() })
//.then(function(response) { return response.json() })
.then((data) => { console.log(data) });

fetch('https://www.boredapi.com/api/activity/')
.then((response) => { return response.json() })
.then((data) => {
    // Get a reference to the HTML element where you want to display the data
    const activityContainer = document.getElementById('activity-container');

    // Create a new HTML element to hold the data (e.g., a <p> element)
    const activityParagraph = document.createElement('p');

    // Set the text content of the new element to the fetched activity
    activityParagraph.textContent = `Activity: ${data.activity}`;

    // Append the new element to the container
    activityContainer.appendChild(activityParagraph);
})
.catch((error) => {
    console.error('Error:', error);
});