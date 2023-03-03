// Makes logout function
const logoutFormHandler = async () => {

    const response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('logged out')
    }
};

//Adds Event Listener to button with id #logout
var logoutSubmit = document.querySelector('#logout')
if (logoutSubmit !== null) { logoutSubmit.addEventListener('click', logoutFormHandler); }