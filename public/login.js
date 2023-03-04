const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    console.log(email, password)
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/dashboard');
      //  document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};


const signupFormHandler = async (event) => {
  event.preventDefault();

  const battleTag = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (battleTag && email && password) {
    const response = await fetch('/api/user/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password, battleTag }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log('logged in successfully', response);
      // document.location.replace('/');
      document.location.replace('/dashboard');
      alert('sign up successful');
    } else {
      console.log(response);
    }
  }
};

var loginSubmit = document.querySelector('.login-form')
loginSubmit.addEventListener('submit', loginFormHandler);

var signUpSubmit = document.querySelector('#signup-form')
signUpSubmit.addEventListener('submit', signupFormHandler);