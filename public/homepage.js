
// const nodemailer = require('nodemailer');
const emailFormHandler = async (event)=>{
  event.preventDefault();

  let battleTag = document.querySelector('#battleTag-input').value.trim();
  let userMessage = document.querySelector('#message-input').value.trim();
  let recipient = document.querySelector('#user-contact').textContent

  console.log(battleTag, userMessage, recipient)

  const response = await fetch('/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      battleTag,
      userMessage,
      recipient
    })
  });

  const data = await response.json();

  if (response.ok) {
    console.log(data.message);
  } else {
    console.error(data.message);
  }
};


let emailUser = document.querySelector('#postEmail');
emailUser.addEventListener('submit', emailFormHandler)

