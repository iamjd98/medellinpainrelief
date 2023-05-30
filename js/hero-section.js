function copyText() {
    var emailElement = document.querySelector('.banner-email p');
    var emailText = emailElement.innerText;

    var textarea = document.createElement('textarea');
    textarea.value = emailText;
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand('copy');

    document.body.removeChild(textarea);
}

function openMessenger() {
    window.open("https://m.me/medellinpainrelief", "_blank");
}

var phoneButton = document.getElementById('phoneButton');
    phoneButton.addEventListener('click', function() {
    window.location.href = 'tel:+639171697677';
});  