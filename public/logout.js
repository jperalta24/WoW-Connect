// Makes logout function
const logoutFormHandler = async () => {

    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    document.location.replace('/login');
};

//Adds Event Listener to button with id #logout
var logoutSubmit = document.querySelector('#logout')
if (logoutSubmit !== null) { logoutSubmit.addEventListener('click', logoutFormHandler); }