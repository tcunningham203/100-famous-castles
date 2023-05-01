const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // Creates slight delay before logging in to display toast "Welcome back!"
      $("#asdf1").toast("show");
      setTimeout(function(){
        document.location.replace('/');
      }, 1500);
    } else {
      // toast('Incorrect username or password.');
            $("#incorrect1").toast("show");
  }
  }
};

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')


const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // Creates slight delay before logging in to display toast "Account Created! Welcome!"
      $("#asdf2").toast("show");
      setTimeout(function(){
        document.location.replace('/');
      }, 2200);
    } else {
      // alert('Failed to sign up.');
      $("#incorrect2").toast("show");
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);