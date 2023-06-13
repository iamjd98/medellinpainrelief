document.addEventListener('DOMContentLoaded', function() {
  const emailInput = document.getElementById('emailInput');
  const phoneInput = document.getElementById('phoneInput');
  const fullNameInput = document.getElementById('fullNameInput');
  const privacyCheck = document.getElementById('privacyCheck');
  const submitButton = document.getElementById('submitButton');

  function validateForm() {
    if (
      emailInput.value.trim() === '' ||
      phoneInput.value.trim() === '' ||
      fullNameInput.value.trim() === '' ||
      !privacyCheck.checked
    ) {
      submitButton.disabled = true;
    } else {
      submitButton.disabled = false;
    }
  }

  emailInput.addEventListener('input', validateForm);
  phoneInput.addEventListener('input', validateForm);
  fullNameInput.addEventListener('input', validateForm);
  privacyCheck.addEventListener('change', validateForm);

  validateForm();
});