function validateForm(event) {
    event.preventDefault(); 


    var email = document.getElementById('emailInput').value;
    var fullName = document.getElementById('fullNameInput').value;
    var message = document.getElementById('messageInput').value;


    if (email.trim() === '') {
      alert('Please enter a valid email.');
      return;
    } else if (fullName.trim() === '') {
      alert('Please enter your full name.');
      return;
    } else if (message.trim() === '') {
      alert('Please enter your message.');
      return;
    }


    document.forms[0].submit();
  }


  var submitButton = document.getElementById('submitButton');
  submitButton.disabled = true;

 
  document.addEventListener('input', function() {
    var email = document.getElementById('emailInput').value;
    var fullName = document.getElementById('fullNameInput').value;
    var message = document.getElementById('messageInput').value;

    submitButton.disabled = email.trim() === '' || fullName.trim() === '' || message.trim() === '';
  });