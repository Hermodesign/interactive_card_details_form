function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

document.querySelector('.btn').addEventListener('click', function () {
  const emailInput = document.getElementById('emailInput');
  const label = document.getElementById('label');
  const container = document.querySelector('.container');
  const container2 = document.querySelector('.container-2');
  const spanValue = document.getElementById('s-email');

  const enteredEmail = emailInput.value;
  // console.log(enteredEmail);

  if (isValidEmail(enteredEmail)) {
    container.classList.add('hidden');
    container2.classList.remove('hidden');
    spanValue.innerText = enteredEmail;
  } else {
    label.classList.remove('hidden');
    emailInput.classList.add('inputError');
  }
});

document.querySelector('.btn-dms').addEventListener('click', function () {
  const container = document.querySelector('.container');
  const container2 = document.querySelector('.container-2');

  container.classList.remove('hidden');
  container2.classList.add('hidden');
});
