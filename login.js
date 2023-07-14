const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Clear any previous error messages
  //   clearErrorMessages();

  // Get form input values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const repeatPassword = document.getElementById("repeatPassword").value;
  const tosCheckbox = document.getElementById("tos").checked;
    console.log(tosCheckbox)

  // Validate form fields
  let messagesArr = [];

  if (firstName.length < 3) {
    document.querySelector("#error1").style.display = "block";
  }
  if (firstName.length >= 3) {
    document.querySelector("#error1").style.display = "none";
    messagesArr.push("#error1");
  }

  if (lastName.length < 3) {
    document.querySelector("#error2").style.display = "block";
  }
  if (lastName.length >= 3) {
    document.querySelector("#error2").style.display = "none";
    messagesArr.push("#error2");
  }

  if (email.length < 3) {
    document.querySelector("#error3").style.display = "block";
  }
  if (email.length >= 3) {
    document.querySelector("#error3").style.display = "none";
    messagesArr.push("#error3");
  }

  if (password.length < 4) {
    document.querySelector("#error4").style.display = "block";
  }

  if (firstName.length >= 4) {
    document.querySelector("#error4").style.display = "none";
    messagesArr.push("#error4");
  }

  if (password != repeatPassword) {
    document.querySelector("#error5").style.display = "block";
  }
  if (password == repeatPassword) {
    document.querySelector("#error5").style.display = "none";
    messagesArr.push("#error5");
  }

  if (!tos) {
    document.querySelector("#error6").style.display = "block";
  }
  if (tos) {
    document.querySelector("#error6").style.display = "none";
    messagesArr.push("#error6");
  }


  if(messagesArr.length===6)
  {
    window.location.href='./index.html'
  }
});
