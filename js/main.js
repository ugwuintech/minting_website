// Toggle Menu
var navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}
// Preloader
var preloader = document.getElementById("preloader");

setTimeout(() => {
  preloader.classList.add("hide");
}, 4000);

// Login Form Validation

function validateLog() {
  if (document.loginForm.userName.value == "") {
    alert("Username or E-mail required");
    document.loginForm.userName.focus();
    return false;
  }
  if (document.loginForm.passWord.value == "") {
    alert("Password required");
    document.loginForm.passWord.focus();
    return false;
  }
  if (
    document.loginForm.userName.value != null ||
    document.loginForm.userName.value != ""
  ) {
    var emailID = document.registerForm.eMail.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || dotpos - atpos < 2) {
      alert("Please enter a correct email address");
      document.registerForm.eMail.focus();
      return false;
    }
    return true;
  }
  return true;
}

// Register Form Validation
function validateReg() {
  if (document.registerForm.username.value == "") {
    alert("username required");
    document.registerForm.username.focus();
    return false;
  }
  if (document.registerForm.eMail.value == "") {
    alert("Please provide your Email");
    document.registerForm.eMail.focus();
    return false;
  }
  if (document.registerForm.password.value == "") {
    alert("Create a strong password");
    document.registerForm.password.focus();
    return false;
  }
  if (document.registerForm.confirmPass.value == "") {
    alert("Confirm password");
    document.registerForm.confirmPass.focus();
    return false;
  }
  if (
    document.registerForm.eMail.value != null ||
    document.registerForm.eMail.value != ""
  ) {
    var emailID = document.registerForm.eMail.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || dotpos - atpos < 2) {
      alert("Please enter a correct email address");
      document.registerForm.eMail.focus();
      return false;
    }
    return true;
  }
  return true;
}
