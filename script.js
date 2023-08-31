// Replace this object with an actual user database in a real application
const users = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" },
    // Add more users here as needed
];

function loginUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the provided username and password match any user in the database
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        document.getElementById("message").innerText = "Login successful!";
        // Redirect the user to the inventory system page or perform other actions
        // For demonstration purposes, we will just display an alert.
        alert("Welcome, " + user.username + "!");
        setTimeout(function () {
            location.reload();
        }, 5000);


        window.location.href = "inventory.html";
    } else {
        document.getElementById("message").innerText = "Invalid username or password.";
    }

    // Prevent form submission
    return false;
}







