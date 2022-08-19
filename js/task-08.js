const onForm = document.querySelector(".login-form");
onForm.addEventListener("submit", validation);

function validation(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  const formData = { email: email.value, password: password.value };

  if (!password.value || !email.value) {
    alert("Empty field! 😬 Write something");
  } else console.log(formData);

  onForm.reset();
}
