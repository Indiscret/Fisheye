const modal = document.getElementById("contact_modal");
const input = document.querySelector(".text-control");
const contactButton = document.querySelector(".contact_button");

function displayModal() {
  modal.style.display = "flex";
  input.focus();
}

function closeModal() {
  modal.style.display = "none";
  contactButton.focus();
}

  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" || event.key === 27) {
      closeModal();
    }
  })



const form = document.getElementById("form_contact");
const formData = document.querySelectorAll(".form_data");
const formFirstName = document.getElementById("first");
const formLastName = document.getElementById("last");
const formEmail =  document.getElementById("email");
const formMessage = document.getElementById("message");



formFirstName.addEventListener("blur", function () { validateName("first") });
formLastName.addEventListener("blur", function () { validateName("last") });
formEmail.addEventListener("blur", function () { validateEmail() });
formMessage.addEventListener("blur", function () { validateMessage() });

form.addEventListener('submit', validate);
function validate(event) {
    const firstNameValid = validateName("first");
    const lastNameValid = validateName("last");
    const emailValid = validateEmail();
    const messageValid = validateMessage();
    
    event.preventDefault();
    
    if (!firstNameValid || !lastNameValid || !emailValid || !messageValid) {
      return false;
    }

  console.log({
    firstName: formFirstName.value,
    lastName: formLastName.value,
    email: formEmail.value,
    message: formMessage.value
  });
  form.reset();
  closeModal();
}



function validateName(elementId) {
  const nameRegExp = new RegExp("^[a-zA-Zàâäéèêëîïìôöòûüùç,.'-]+$");
  const formName = document.getElementById(elementId);
  const index = elementId === "first" ? 0 : 1;

  if (formName.value.length < 2 || !nameRegExp.test(formName.value)) {
    formData[index].dataset.error = "Veuillez saisir au minimun 2 caractères.";
    formData[index].dataset.errorVisible = "true";
    return false;
  } else {
    delete formData[index].dataset.error;
    delete formData[index].dataset.errorVisible;
    return true;
  }
}

function validateEmail() {

  const emailRegExp = new RegExp("^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$");

  if (formEmail.value === "" || !emailRegExp.test(formEmail.value)) {
    formData[2].dataset.error = "Veuillez saisir une adresse e-mail valide.";
    formData[2].dataset.errorVisible = "true";
    return false;
  } else {
    delete formData[2].dataset.error;
    delete formData[2].dataset.errorVisible;
    return true;
  }
}

function validateMessage() {

  if (formMessage.value === "") {
    formData[3].dataset.error = "Veuillez saisir un message";
    formData[3].dataset.errorVisible = "true";
    return false;
  } else {
    delete formData[3].dataset.error;
    delete formData[3].dataset.errorVisible;
    return true;
  }
}