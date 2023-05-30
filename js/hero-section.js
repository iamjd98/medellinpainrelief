function openMessenger() {
    window.open("https://www.messenger.com", "_blank");
  }

var phoneButton = document.getElementById('phoneButton');
    phoneButton.addEventListener('click', function() {
    window.location.href = 'tel:+639171697677';
    });  