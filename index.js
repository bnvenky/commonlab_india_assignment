var openDialogButtons = document.querySelectorAll(".openDialogButton");

var myModal = document.getElementById("myModal");
var closeDialogButton = document.getElementById("closeDialogButton");

function openDialog() {
  myModal.style.display = "block";
}

function closeDialog() {
  myModal.style.display = "none";
}

// Add click event listeners to all "Open Dialog" buttons
openDialogButtons.forEach(function (button) {
  button.addEventListener("click", openDialog);
});

// Add click event listener to the "Close" button
closeDialogButton.addEventListener("click", closeDialog);

document.addEventListener("DOMContentLoaded", function () {
  const firstNameInput = document.getElementById("first");
  const lastNameInput = document.getElementById("last");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const errorMessage = document.createElement("div");
  errorMessage.className = "error-message";
  errorMessage.textContent = "Please complete all required fields.";
  errorMessage.style.color = "red";
  errorMessage.style.display = "none";
  document.querySelector(".modal-content").appendChild(errorMessage);

  function validateForm() {
    if (
      firstNameInput.value.trim() === "" ||
      lastNameInput.value.trim() === "" ||
      emailInput.value.trim() === "" ||
      phoneInput.value.trim() === ""
    ) {
      errorMessage.style.display = "block";
    } else {
      errorMessage.style.display = "none";
    }
  }

  document
    .querySelector(".custom-button")
    .addEventListener("click", validateForm);
});
