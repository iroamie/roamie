// scripts.js
function addGroupDetails() {
    const groupSize = document.getElementById('group-size').value;
    const groupDetails = document.getElementById('group-details');
    groupDetails.innerHTML = '';

    for (let i = 0; i < groupSize; i++) {
        const personDetails = document.createElement('div');
        personDetails.classList.add('person-details');
        personDetails.innerHTML = `
            <h3>Person ${i + 1}</h3>
            <label for="name-${i}">Name:</label>
            <input type="text" id="name-${i}" name="name-${i}" required>
            <label for="location-${i}">Location:</label>
            <input type="text" id="location-${i}" name="location-${i}" required>
        `;
        groupDetails.appendChild(personDetails);
    }
}
