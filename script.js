console.log('Obsługa formularza-"imię i nazwisko" ');

const submitForm = (event) => {
  event.preventDefault();

  let firstName = document.querySelector('[name="fname"]');
  let lastName = document.querySelector('[name="lname"]');

  console.log(`Imie: ${firstName.value}, Nazwisko: ${lastName.value}`);

  // console.log(`Submit FORM`)
  // console.log(firstName);
  // console.log(lastName);
};

let form = document.getElementById("form");

form.addEventListener("submit", submitForm);

console.log(form);
