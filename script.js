document.getElementById('doneBtn').addEventListener('click', function() {
    // Disable all checkboxes
    const checkboxes = document.querySelectorAll('.bingo-table input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.disabled = true;
    });

    // Display date and time below the button in English
    const now = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    const formattedDate = now.toLocaleString('en-US', options);
    const dateTimeElement = document.createElement('p');
    dateTimeElement.id = 'dateTime';
    dateTimeElement.textContent = `Date and Time: ${formattedDate}`;
    document.querySelector('.container').appendChild(dateTimeElement);

    // Disable the "Done" button
    this.disabled = true;
});
