document.getElementById('diagnose-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the form data
    const crop = document.getElementById('crop').value;
    const symptoms = document.getElementById('symptoms').value;
    const photo = document.getElementById('photo').files[0];

    if (photo) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            console.log('Photo:', e.target.result); // Base64 encoded image string
            alert(`Diagnosing ${crop} with symptoms: ${symptoms}`);
        };

        reader.readAsDataURL(photo);
    } else {
        alert('Please upload or take a crop photo.');
    }
});
