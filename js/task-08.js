const onForm = document.querySelector(".login-form");
onForm.addEventListener("submit", validation);

function validation(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!password.value || !email.value) {
    alert("Empty field! 😬 Write something");
  }

  const formData = { email: email.value, password: password.value };

  console.log(formData);
  onForm.reset();
}
