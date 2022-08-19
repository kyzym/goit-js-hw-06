const onForm = document.querySelector(".login-form");
onForm.addEventListener("submit", validation);

function validation(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  let enteredPassword = password.value.trim();

  if (!enteredPassword || !email.value) {
    alert("Empty field! 😬 Write something");
  } else console.log({ email: email.value, password: password.value });

  onForm.reset();
}
