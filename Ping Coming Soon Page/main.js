const submit = document.querySelector('#submitBtn');
const email = document.querySelector('#mail');
const emailStatus = document.querySelector('.emailStatus');


window.onload = () => {
    email.value = '';
}



submit.addEventListener('click', (e) => {
    e.preventDefault();

    if (email.validity.typeMismatch) {
        emailStatus.style.color = 'red';
        email.style.border = '1px solid red';
        emailStatus.textContent = 'Please enter a valid email address';
        
    } else {
        emailStatus.style.color = 'green'
        emailStatus.textContent = 'Email successfully received'
    }

})