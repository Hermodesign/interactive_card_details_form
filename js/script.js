function updateName(input) {
  document.querySelector('.name').innerText = input.value;
}

function updateNumber(input) {
  input.value = input.value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ');
  const wrongFormat = document.querySelector('.wrong-number');
  input.classList[input.value.match(/[^0-9\s]/) ? 'add' : 'remove'](
    'red-border'
  );

  if (input.value.match(/[^0-9\s]/)) {
    wrongFormat.classList.remove('hidden');
  } else {
    wrongFormat.classList.add('hidden');
  }

  document.querySelector('.number').innerText = input.value;
}

function updateDate() {
  const monthInput = document.querySelector('.inp-mm');
  const yearInput = document.querySelector('.inp-yy');
  const monthSpan = document.querySelector('.month');
  const yearSpan = document.querySelector('.year');

  monthSpan.innerText = monthInput.value.padStart(2, '0');
  yearSpan.innerText = yearInput.value.padStart(2, '0');
}

function onlyNumbers(evt) {
  const charCode = evt.which || evt.keyCode;
  return charCode >= 48 && charCode <= 57;
}

function updateCVC(input) {
  document.querySelector('.number-back').innerText = input.value;
}

// Validate form
function validateForm() {
  const nameInput = document.querySelector('.inp-name').value.trim();
  //NASTAVI
  const borderName = document.querySelector('.inp-name');
  const numberInput = document
    .querySelector('.inp-number')
    .value.replace(/\s/g, '');
  const mmInput = document.querySelector('.inp-mm').value.trim();
  const yyInput = document.querySelector('.inp-yy').value.trim();
  const cvcInput = document.querySelector('.inp-cvc').value.trim();

  const wrongName = document.querySelector('.wrong-name');
  const wrongNumber = document.querySelector('.wrong-number-2');
  const wrongDate = document.querySelector('.wrong-date');
  const wrongCVC = document.querySelector('.wrong-cvc');

  if (!nameInput) {
    wrongName.classList.remove('hidden');
    //NASTAVI
    borderName.classList.add('red-border');
  } else {
    wrongName.classList.add('hidden');
    //NASTAVI
    borderName.classList.remove('red-border');
  }

  if (numberInput.length !== 16) {
    wrongNumber.classList.remove('hidden');
  } else {
    wrongNumber.classList.add('hidden');
  }

  if (!mmInput || !yyInput) {
    wrongDate.classList.remove('hidden');
  } else {
    wrongDate.classList.add('hidden');
  }

  if (!cvcInput) {
    wrongCVC.classList.remove('hidden');
  } else {
    wrongCVC.classList.add('hidden');
  }

  const errorMessages = document.querySelectorAll('.wrong:not(.hidden)');
  const btnConfirm = document.querySelector('.btn-1');
  // const btnCont = document.querySelector('.btn-2');

  if (errorMessages.length === 0) {
    // Ovde možeš dodati akciju koju želiš izvršiti kada je forma validna
    btnConfirm.disabled = false;
    const dataClass = document.querySelector('.form');
    const secPage = document.querySelector('.sec-page');

    dataClass.classList.add('hidden');
    console.log('Nikola');
    secPage.classList.remove('hidden');
  } else {
    errorMessages = 0;
    btnConfirm.disabled = true;
  }
}

//Back to home
function backToHome() {
  document.querySelector('.inp-name').value = '';
  document.querySelector('.name').innerText = 'Jane Appleseed';

  const numberInput = document.querySelector('.inp-number');
  numberInput.value = '';
  numberInput.classList.remove('red-border');
  document.querySelector('.wrong-number').classList.add('hidden');
  document.querySelector('.number').innerText = '0000 0000 0000 0000';

  document.querySelector('.inp-mm').value = '';
  document.querySelector('.inp-yy').value = '';
  document.querySelector('.month').innerText = '00';
  document.querySelector('.year').innerText = '00';
  document.querySelector('.wrong-date').classList.add('hidden');

  const cvcInput = document.querySelector('.inp-cvc');
  cvcInput.value = '';
  cvcInput.classList.remove('red-border');
  document.querySelector('.wrong-cvc').classList.add('hidden');
  document.querySelector('.number-back').innerText = '000';

  document.querySelector('.sec-page').classList.add('hidden');
  document.querySelector('.form').classList.remove('hidden');
}
