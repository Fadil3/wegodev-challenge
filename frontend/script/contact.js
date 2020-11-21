function contact() {
    var sender = document.getElementById('sender');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var message = document.getElementById("message")

    localStorage.setItem('sender', sender.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('phone', phone.value);
    localStorage.setItem('message', message.value);

    
    alert(`Thanks,${sender.value}. We will read and respond to your message in a few hours.`);
    console.log(`${message.value}`);

}