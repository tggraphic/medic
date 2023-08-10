document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", async function (e) {
        e.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;

        // Send login data to the backend
        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            const data = await response.json();
            if (data.success) {
                alert("Login successful!");
                // Redirect to a dashboard or home page
                // window.location.href = "/dashboard";
            } else {
                alert("Login failed. Please check your credentials.");
            }
        } else {
            alert("An error occurred. Please try again later.");
        }
    });
});
