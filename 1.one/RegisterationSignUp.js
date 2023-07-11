function validateForm() {
  // Get form inputs
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;
  var Department = document.getElementById("Department").value;

  // Perform form validation
  if (username === "") {
    alert("Please enter a username");
    return;
  }

  if (password === "") {
    alert("Please enter a password");
    return;
  }

  if (email === "") {
    alert("Please enter an email");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address");
    return;
  }

  if (Department === "") {
    alert("Please select a country");
    return;
  }

  // If all validations pass, submit the form
  submitForm();
}

function validateEmail(email) {
  // Simple email validation using regular expression
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function submitForm() {
  // Get form inputs
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;
  var Department = document.getElementById("Department").value;

  // Log the form data
  console.log("Username: " + username);
  console.log("Password: " + password);
  console.log("Email: " + email);
  console.log("Department: " + Department);

  // You can perform further actions with the form data here, such as submitting it to a server
}
