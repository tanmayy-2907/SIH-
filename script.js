
//login

document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (email === "" || password === "") {
        alert("Please fill in all fields.");
    } else {
        

        // Redirect to the main home page of the website
        window.location.href = "home.html";  // Update this URL to match your home page
    }
});



