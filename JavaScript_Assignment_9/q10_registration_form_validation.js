// Q10 - Registration Form Validation (jQuery)

$(function () {

  // Simulated "database" of already registered emails (used for the uniqueness check)
  var registeredEmails = [
    "admin@example.com", "john@example.com", "test@example.com",
    "priya@example.com", "rahul@example.com"
  ];

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  // 5. Mark a field invalid (red border via .css()) and show its error message
  function setInvalid($input, message) {
    $input.css("border", "2px solid red");
    $input.next(".error").text(message);
    return false;
  }

  // Mark a field valid (green border) and clear its error message
  function setValid($input) {
    $input.css("border", "2px solid green");
    $input.next(".error").text("");
    return true;
  }

  // 1. Name must not be empty
  function validateName() {
    var $name = $("#name");
    if ($.trim($name.val()) === "") return setInvalid($name, "Name is required.");
    return setValid($name);
  }

  // 2. Email must have a valid format and must be unique
  function validateEmail() {
    var $email = $("#email");
    var value = $.trim($email.val()).toLowerCase();
    if (value === "") return setInvalid($email, "Email is required.");
    if (!emailPattern.test(value)) return setInvalid($email, "Enter a valid email address.");
    if ($.inArray(value, registeredEmails) !== -1) return setInvalid($email, "This email is already registered.");
    return setValid($email);
  }

  // 3. Password must be at least 8 characters
  function validatePassword() {
    var $password = $("#password");
    if ($password.val().length < 8) return setInvalid($password, "Password must be at least 8 characters.");
    return setValid($password);
  }

  // Validate each field when the user leaves it (blur) for instant feedback
  $("#name").on("blur", validateName);
  $("#email").on("blur", validateEmail);
  $("#password").on("blur", validatePassword);

  // Form submit -> run all validations (every function is called, so all errors show together)
  $("#registerForm").on("submit", function (e) {
    e.preventDefault();                 // stop the page from reloading
    var nameOk = validateName();
    var emailOk = validateEmail();
    var passwordOk = validatePassword();

    if (nameOk && emailOk && passwordOk) {
      // 4. All valid -> show success message
      var name = $.trim($("#name").val());
      registeredEmails.push($.trim($("#email").val()).toLowerCase()); // email is now taken
      $("#successMsg").text("Registration successful! Welcome, " + name + ".").fadeIn();
      this.reset();                                  // clear the form
      $("#registerForm input").css("border", "");    // remove red/green borders
    } else {
      $("#successMsg").hide();
    }
  });
});
