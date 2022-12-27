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

//Form Validation

// function validateLog() {
//   if (document.loginForm.userName.value == "") {
//     alert("Username or E-mail required");
//     document.loginForm.userName.focus();
//     return false;
//   }
//   if (document.loginForm.passWord.value == "") {
//     alert("Password required");
//     document.loginForm.passWord.focus();
//     return false;
//   }
//   if (
//     document.loginForm.userName.value != null ||
//     document.loginForm.userName.value != ""
//   ) {
//     var emailID = document.registerForm.eMail.value;
//     atpos = emailID.indexOf("@");
//     dotpos = emailID.lastIndexOf(".");

//     if (atpos < 1 || dotpos - atpos < 2) {
//       alert("Invalid username");
//       document.registerForm.eMail.focus();
//       return false;
//     }
//     return true;
//   }

//   return true;
// }

// // Register Form Validation
// function validateReg() {
//   if (document.registerForm.username.value == "") {
//     alert("username required");
//     document.registerForm.username.focus();
//     return false;
//   }
//   if (document.registerForm.eMail.value == "") {
//     alert("Please provide your Email");
//     document.registerForm.eMail.focus();
//     return false;
//   }
//   if (document.registerForm.password.value == "") {
//     alert("Create a strong password");
//     document.registerForm.password.focus();
//     return false;
//   }
//   if (document.registerForm.confirmPass.value == "") {
//     alert("Confirm password");
//     document.registerForm.confirmPass.focus();
//     return false;
//   }

//   // When fields have been filled
//   // if (
//   //   document.registerForm.userName.value != null ||
//   //   document.registerForm.userName.value != ""
//   // ) {
//   //   var nameLength = document.registerForm.username.length;
//   // }
//   if (
//     document.registerForm.eMail.value != null ||
//     document.registerForm.eMail.value != ""
//   ) {
//     var emailID = document.registerForm.eMail.value;
//     atpos = emailID.indexOf("@");
//     dotpos = emailID.lastIndexOf(".");

//     if (atpos < 1 || dotpos - atpos < 2 || dotpos < 1) {
//       alert("Please enter a correct email address");
//       document.registerForm.eMail.focus();
//       return false;
//     }
//     return true;
//   }
//   return true;
// }

//  FORM VALIDATION (REG FORM)

const registerform = document.getElementById("registerform");
const loginform = document.getElementById("loginform");
const username = document.getElementById("username");
const userName = document.getElementById("userName");
const passWord = document.getElementById("passWord");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// REGISTER FORM
registerform.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

loginform.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const userNameValue = userName.value.trim();
  const passWordValue = passWord.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  // LOGIN
  if (userNameValue === "") {
    setErrorFor(userName, "Username cannot be blank");
  } else {
    setSuccessFor(userName);
  }
  if (passWordValue === "") {
    setErrorFor(passWord, "Password cannot be blank");
  } else {
    setSuccessFor(passWord);
  }

  // REGISTER
  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else {
    setSuccessFor(username);
  }
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else {
    setSuccessFor(password);
    if (password2Value === "") {
      setErrorFor(password2, "Confirm your password");
    } else if (passwordValue !== password2Value) {
      setErrorFor(password2, "Passwords does not match");
    } else {
      setSuccessFor(password2);
    }
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
