document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform login validation
    if (username === "") {
      alert("Please enter a username");
      return;
    }

    if (password === "") {
      alert("Please enter a password");
      return;
    }

    // If login is successful, you can redirect or perform other actions
    alert("Login successful!");
  });
