// Script for Discord verification website

// Function to verify user
function verifyUser(userID) {
    // Implement verification logic here
    console.log(`Verifying user with ID: ${userID}`);
}

// Event listener for form submission
document.getElementById('verification-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const userID = document.getElementById('user-id').value;
    verifyUser(userID); // Call the verifyUser function
});