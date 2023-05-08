
const form = document.getElementById('loginForm');

const emailInput = document.getElementById('inputEmail');


form.addEventListener('submit', function(event) {
   
    event.preventDefault();

 
    const email = emailInput.value;

  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);


    if (!isEmailValid) {
        emailInput.classList.add('is-invalid');
        return;
    }

   
    form.submit();
});
